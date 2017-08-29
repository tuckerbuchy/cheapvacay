class FoodTypes:
    RESTAURANTS = "restaurants"
    GROCERIES = "groceries"


def calculate_groceries_index(country_expenses):
    # weekly estimate... just randomly put together.
    grocery_basket = [
        dict(name="Eggs (regular) (12)", quantity=1),
        dict(name="Water (1,5 liter bottle)", quantity=6),
        dict(name="Beef Round (1kg) (or Equivalent Back Leg Red Meat)", quantity=0.25),
        dict(name="Local Cheese (1kg)", quantity=0.5),
        dict(name="Chicken Breasts (Boneless, Skinless), (1kg)", quantity=1),
        dict(name="Tomato (1kg)", quantity=1),
        dict(name="Milk (regular), (1 liter)", quantity=2),
        dict(name="Rice (white), (1kg)", quantity=1),
        dict(name="Oranges (1kg)", quantity=2),
        dict(name="Loaf of Fresh White Bread (500g)", quantity=1)
    ]

    markets = country_expenses["Markets"]

    weekly_grocery_cost = 0.0
    for item in grocery_basket:
        if item["name"] in markets:
            purchase_price = markets[item["name"]] if markets[item["name"]] else 0.0
            weekly_cost = purchase_price * item["quantity"]
            weekly_grocery_cost = weekly_grocery_cost + weekly_cost

    DAYS_PER_WEEK = 7.0
    daily_grocery_cost = weekly_grocery_cost / DAYS_PER_WEEK
    return daily_grocery_cost

def get_food_cost(food_type, country_expenses):
    if food_type == FoodTypes.RESTAURANTS:
        food_cost = country_expenses["Restaurants"]["Meal, Inexpensive Restaurant"] * 3.0  # 3 meals a day
    elif food_type == FoodTypes.GROCERIES:
        food_cost = calculate_groceries_index(country_expenses)  # returned on a per day basis
    return food_cost

