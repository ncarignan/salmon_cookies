'use strict'
// The below is for 1st and Pike

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var averageCookies = 6.3;
var averageCustomers 
var cookiesSold = 657;
var testArray = []


var patsCookies = {
    minCustomers: 23, 
    maxCustomers: 65,
    averageCookies: 6.3, 
    totalCookies: 0,
    customersPerHour: [], 
    cookiesPerHour: [],   
}

patsCookies.populateCustomers = function () {     
    for (var i = 0; i < 14; i++) {
       this.customersPerHour.push (randomCustomers (this.minCustomers, this.maxCustomers)) //populatecustomers is pushing the array of 14 numbers up into customers per hour []
   }
}

patsCookies.calculateCookiesPerHour = function () {
    this.populateCustomers ();
    for (var i = 0; i < 14; i++) {
        this.cookiesPerHour.push (Math.ceil (this.customersPerHour[i] * this.averageCookies));
        this.totalCookies = this.totalCookies + this.cookiesPerHour [i]; 
    }
}

// ulEl (unordered list, Element)

patsCookies.render = function () {
    this.calculateCookiesPerHour();
    var ulEl = document.getElementById ('firstPike') 

for (var i = 0; i <14; i++) {
    var liEl = document.createElement ('li')
    liEl.textContent = hours[i] + ': ' + this.cookiesPerHour [i] + ' cookies.' // This says that i moves together with hours and cookies as one unit.
    ulEl.append (liEl) 
}

}

  function randomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Min Customers per hour 23
// Max customers per hour 65
// Average cookies sold 6.3


// Lots of stuff goes in here

// render () {
//     // grab parent element from DOM

//         for(hours){
            
//             // create li
//             // give li content
//             // append li
//         }
//         // create content append
// }




// return Math.floor(Math.random() * (max - min + 1)) + min;  // <--- Gonna need this to get the randomness for the cookies


// for(var i = 0; i < array.length -1; i++) <--- For loop?













// down the line think about making an array for all the store objects
