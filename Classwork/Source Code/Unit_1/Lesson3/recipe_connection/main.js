"use strict";

const cities = require("cities");
var myCity = cities.zip_lookup("10016");
console.log(myCity);

//Line 4 calls the zip_lookup() function provided by the cities module, passing it a ZIP code as an argument ("10016" in this case). 
//This function returns an object containing information about the city associated with the provided ZIP code, such as its name, state,and population. 