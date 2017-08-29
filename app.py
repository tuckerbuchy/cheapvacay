import json
import os

from flask import Flask, request
from flask_cors import CORS, cross_origin
import pymongo

from search import get_food_cost

client = pymongo.MongoClient('mongodb://cheapvacay_read:password@ds161022.mlab.com:61022/cheapvacay')
db = client['cheapvacay']

app = Flask(__name__)
CORS(app)

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/search', methods=['POST'])
@cross_origin()
def search():
    is_smoker = bool(request.form["smoking"])
    is_drinker = bool(request.form["drinking"])
    food_type = request.form["food"] # groceries or restaurants
    # country = request.form["country"]
    # accomodation = params["accomodation"]

    calculated_travel_costs = {}

    country_list = db.country_codes.find()

    for country in country_list:
        country_costs = {}
        country_name = country['name']
        country_data = db.country_data.find_one({"country_name": country_name})
        if country_data:
            expenses = country_data["expenses"]
            if is_smoker:
                if country_data:
                    try:
                        category = "Markets"
                        item = "Pack of Cigarettes (Marlboro)"
                        country_costs["smoking_cost"] = expenses[category][item]
                    except KeyError:
                        print "{} not found for {}".format(item, country_name)

            if is_drinker:
                if country_data:
                    try:
                        category = "Restaurants"
                        item = "Domestic Beer (0,5 liter draught)"
                        country_costs["drinking_cost"] = expenses[category][item]
                    except KeyError:
                        print "{} not found for {}".format(item, country_name)

            if food_type:
                country_costs["food_cost"] = get_food_cost(food_type, expenses)

            # accomodation
            try:
                rent = expenses["Rent Per Month"]["Apartment (1 bedroom) in City Centre"] if expenses["Rent Per Month"]["Apartment (1 bedroom) in City Centre"] else 0.0
                country_costs["daily_rent"] = rent / 30.0  # To make it daily
            except KeyError:
                print "{} not found for {}".format("Apartment (1 bedroom) in City Centre", country_name)

        # Not supported
        country_costs["activities"] = {}

        calculated_travel_costs[country['code']] = country_costs

    return json.dumps(calculated_travel_costs)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0", port=port)
