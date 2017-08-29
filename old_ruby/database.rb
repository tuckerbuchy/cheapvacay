require 'uri'
require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json/ext' # required for .to_json

# include Mongo

# configure do
#   db = URI.parse(ENV['MONGOHQ_URL'])
#   conn = MongoClient.new(db.host, db.port)
#   set :mongo_connection, conn
#   set :mongo_db, conn.db('test')
# end

class Database
  def initialize
    # This is a read only user, but we should still env var it.
    @db_url = URI.parse('mongodb://cheapvacay_read:password@ds161022.mlab.com:61022/cheapvacay')
    @db_name = @db_url.path.gsub(/^\//, '')
  end

  def connect
    db = Mongo::Client.new(@db_url).database
    # db = Mongo::Connection.new(@db_url.host, @db_url.port, :pool_size => 5, :connect => false).db(@db_name)
    auth = db.authenticate(@db_url.user, @db_url.password)
    return db
  end
end