cities = {
  "most_populated_cities": [
    {
      "city": "Tokyo",
      "country": "Japan",
      "population": 37400000
    },
    {
      "city": "Delhi",
      "country": "India",
      "population": 28514000
    },
    {
      "city": "Shanghai",
      "country": "China",
      "population": 24150000
    },
    {
      "city": "São Paulo",
      "country": "Brazil",
      "population": 21045000
    },
    {
      "city": "Cairo",
      "country": "Egypt",
      "population": 20076000
    },
    {
      "city": "Mexico City",
      "country": "Mexico",
      "population": 20116000
    },
    {
      "city": "Dhaka",
      "country": "Bangladesh",
      "population": 19526000
    },
    {
      "city": "Mumbai",
      "country": "India",
      "population": 19167000
    },
    {
      "city": "Beijing",
      "country": "China",
      "population": 19000000
    },
    {
      "city": "Osaka",
      "country": "Japan",
      "population": 18882000
    }
  ]
}

for city in cities["most_populated_cities"]:
    print(city['city'] + " in " + city["country"] + " has " + f"{city["population"]:,}" + " people in it.")