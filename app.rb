require 'bundler/setup'
require 'sinatra'
require 'sinatra/reloader'
require_relative 'database'
require_relative 'search'

set :db, Database.new().connect()

get '/' do
	File.read(File.join('public', 'index.html'))
end


####################################################################################
###################################UTILITY ENDPOINTS################################
####################################################################################

# Get data from mongo by collection.
get '/collections/:collection' do |n|
	coll = settings.db.collection(n)
	coll.find.to_a.to_json
end

post '/search' do
	price_information = calculate_travel_costs(params)
	price_information.to_s
end


####################################################################################
####################################################################################



####################################################################################
###################################TRAVEL DATA ENDPOINTS############################
####################################################################################

# Get the hotel prices for a group of geograpic locations
# Defaults to "By city", but can aggregate to country as well.
get '/hotel-prices' do
  content_type :json
	#param :for_countries,           Boolean
	coll = settings.db.collection("hotels")
	if params[:for_countries] == "true"
		#Aggregate the country data
		hotels = coll.aggregate([
			{"$group" => {_id:"$country",hotels:{'$avg'=>'$hotels'},hostels:{'$avg'=>'$hostels'},backpacker_index:{'$avg'=>'$backpacker_index'},travelprice_index:{'$avg'=>'$travelprice_index'}}}
		])
	else
		hotels = coll.find
	end
	hotels.to_a.to_json
end 

####################################################################################
####################################################################################

post '/search' do
  content_type :json
  return calculate_travel_costs(params).to_json
end
