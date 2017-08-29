require 'pry'

AVG = 14908.36
STDEV = 22172.36

def zscore(x, avg, std)
  (x - avg)/std
end

def factor(gdp)
  # gives the z-score for gdp per capita of a country
  zscore(gdp, AVG, STDEV)
end

# { "country": Canada
#	"country_list": [
#		{
# 			"country": Albania,
# 			"smoking_costs": 100
#		},
#       {
# 			"country": Aremenia,
# 			"drinking_costs" : 50
#		},
#   ]
#}
def calculate_travel_costs(params)
	is_smoker = (params["smoking"] == "true")
	is_drinker = (params["drinking"] == "true")
	food = params["food"]
	country = params["country"]
	accomodation = params["accomodation"]

	calculated_travel_costs = Hash.new

	country_list = get_country_list()
	accomodation_list = get_accomodation_list()
	smoking_list = get_smoking_list()
	drinking_list = get_drinking_list()
	flight_list = get_flight_list(country)
  	activity_list = get_activities_list()
	food_list = get_food_list()

	country_list.each do |dst_country|
		country_code = dst_country["code"]
		
		country_costs = Hash.new
		flight_cost = flight_list.find{|h1| h1['destination']== country_code}
		if flight_cost
			country_costs["flight_cost"] = flight_cost["avg_fare"]
		end

		food_cost = get_food_cost(food, country_code, food_list)
		if food_cost
			food_cost = convert_to_dollar_value(food_cost, food)
			country_costs["food_cost"] = food_cost
		end

		accomodation_cost = get_accomodation_cost(accomodation, country_code, accomodation_list)
		if accomodation_cost 
			country_costs["accomodation_cost"] = accomodation_cost
		end

		if is_smoker
			country_info = smoking_list.find{|h1| h1['country']== country_code}
			if country_info
				#No data if we dont find a country
				country_costs["smoking_cost"] = country_info["price"]
			end
		end

		if is_drinker
			country_info = drinking_list.find{|h1| h1['country']== country_code}
			if country_info
				#No data if we dont find a country
				country_costs["drinking_cost"] = country_info["price"]
			end
		end
    
    country_costs["activities"] = activity_list.find{|a| a['country'] == country_code}
    country_costs["activities"].delete("_id")

		calculated_travel_costs[country_code] = country_costs
	end
	puts calculated_travel_costs.to_json
	return calculated_travel_costs.to_json
end

def get_food_list()
	coll = settings.db.collection("indices")
	food_data = coll.find()
	food_data.to_a
end

def get_country_list()
	coll = settings.db.collection("country_codes")
	country_codes = coll.find.to_a
	country_codes
end

def get_smoking_list()
	coll = settings.db.collection("items")
	cigarette_prices = coll.find({"item" => "Pack of Cigarettes (Marlboro)"})
	cigarette_prices.to_a
end

def get_drinking_list()
	coll = settings.db.collection("items")
	beer_prices = coll.find({"item" => "Domestic Beer (0.5 liter draught)"})
	beer_prices.to_a
end

def get_accomodation_list()
	coll = settings.db.collection("hotels")
	accomodation_prices = coll.aggregate([
			{"$group" => {_id:"$country",hotels:{'$avg'=>'$hotels'},hostels:{'$avg'=>'$hostels'},backpacker_index:{'$avg'=>'$backpacker_index'},travelprice_index:{'$avg'=>'$travelprice_index'}}}
		])
	accomodation_prices.to_a
end

def get_flight_list(origin)
	coll = settings.db.collection("country_flights")
	flights_from_origin = coll.find({"origin" => origin})
	flights_from_origin.to_a
end

def get_accomodation_cost(accomodation_type, country, accomodation_list)
	country_info = accomodation_list.find{|h1| h1['_id']== country} 
	if country_info
		if accomodation_type == "hotel"
			accomodation_cost = country_info["hotels"]
		elsif accomodation_type == "hostel"
			accomodation_cost = country_info["hostels"]
		elsif accomodation_type == "camping"
			# TODO: IMPLEMENT THIS BY SCRAPING MORE DATA
			accomodation_cost = 0
			#accomodation_cost = country_info["camping"]
		end
		return accomodation_cost
	end	
end

def get_food_cost(food_type, country, food_list)
	country_info = food_list.find{|h1| h1['country']== country} 
	if country_info
		if food_type == "restaurants"
			food_cost = country_info["restaurant_index"]
		elsif food_type == "groceries"
			food_cost = country_info["groceries_index"]
		end
		return food_cost
	end	
end

# Get an aggregate of the flight costs to different countries.
def get_flights_costs(country)
	coll = settings.db.collection("flights")
	result = {}
	flights = coll.find({"origin_country"=>country}).each { |row| result[row['id']] = row }
	puts result
	destinations = result["destinations"]
	return destinations
end

def get_activities_list
  coll = settings.db.collection("activities")
  coll.find().to_a
end

# Converts the food cost to a dollar value based on new york meal cost.
def convert_to_dollar_value(food_cost, food_type)
	ratio = food_cost/100

	if food_type == "groceries"
		minimum_grocery_expense_per_day_in_nyc = 12.91
		food_cost_in_usd = ratio * minimum_grocery_expense_per_day_in_nyc
	elsif food_type == "restaurants"
		inexpensive_meal_new_york = 15.00
		meals_per_day = 3
		food_cost_in_usd = ratio * inexpensive_meal_new_york * meals_per_day
	end
	food_cost_in_usd
end

