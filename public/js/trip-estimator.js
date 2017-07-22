function estimateTrip(countryData, duration){

	// Estimate based on 3 meals a day
	// var foodCostPerDay = countryData.food;
	// var foodCost;
	// if (foodCostPerDay){
	// 	foodCost = foodCostPerDay * 3 * duration;
	// }

	
	var flightCost = countryData.flight_cost;
	if (!flightCost){
		flightCost = 0;
	}

	var foodCost = countryData.food_cost * duration
	if (!foodCost){
		foodCost = 0;
	}

	var hotelCost = countryData.accomodation_cost * duration
	if (!hotelCost){
		hotelCost = 0;
	}

	// Estimate based on 20 cigarettes (1 pack) per day
	var cigarettesCost = countryData.smoking_cost * duration
	if (!cigarettesCost){
		cigarettesCost = 0;
	}

	// Estimate based on 1 beer a day
	var drinkingCost = countryData.drinkingCost * duration
	if (!drinkingCost){
		drinkingCost = 0;
	}

	var cost = {
		flight:flightCost,
		food:foodCost,
		beer:drinkingCost,
		cigarettes:cigarettesCost,
		accomodation:hotelCost,
		total:flightCost + drinkingCost + cigarettesCost + hotelCost + foodCost
	};


	return cost;
}