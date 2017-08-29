function estimateTrip(countryData, duration){
	var foodCost = countryData.food_cost * duration
	if (!foodCost){
		foodCost = 0;
	}

	// Estimate based on 20 cigarettes (1 pack) per day
	var cigarettesCost = countryData.smoking_cost * duration
	if (!cigarettesCost){
		cigarettesCost = 0;
	}

	// Estimate based on 1 beer a day
	var drinkingCost = countryData.drinking_cost * duration
	if (!drinkingCost){
		drinkingCost = 0;
	}

	var dailyRentCost = countryData.daily_rent * duration
	if (!dailyRentCost){
		dailyRentCost = 0;
	}

	var cost = {
		food:foodCost,
		beer:drinkingCost,
		rent:dailyRentCost,
		cigarettes:cigarettesCost,
		total:drinkingCost + cigarettesCost + foodCost + dailyRentCost
	};


	return cost;
}