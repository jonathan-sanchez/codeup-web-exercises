"use strict";
console.log("Hello from an external JS file.");

var name = "Jonathan";
console.log("Hello, " + name);

//Alert
alert("Welcome to my site!");

//Confirm
var confirmLeave = confirm("Are you sure you want to leave? O_o");
console.log("confirmLeave " + confirmLeave);

//Prompt
var favoriteColor = prompt( "What is your favorite color?");

console.log("Your favorite color is " + favoriteColor);

alert("Great! " + favoriteColor + " is also my favorite color!" );

//Movie Rentals
var lilMerm = parseInt(prompt("How many days did you rent Little Mermaid?"));

var brotherB = parseInt(prompt("How many days did you rent Brother Bear?"));

var hercules = parseInt(prompt("How many days did you rent Hercules?"));

var totalOwed = (lilMerm + brotherB + hercules)

alert("Your total price for accumulated days is $" + totalOwed);

//Total Pay
var googleRate = prompt("What is your hourly rate working for Google?");

var googleHours = prompt("How many hours did you work in total for Google?");

var googlePay = (googleRate) * (googleHours);

alert("This is how much you made working for Google: $" + (googlePay));


var amazonRate = prompt("What is your hourly rate working for Amazon?");

var amazonHours = prompt("How many hours did you work in total for Amazon?");

var amazonPay = (amazonRate) * (amazonHours);

alert("This is how much you made working for Amazon: $" + (amazonPay));

var facebookRate = prompt("What is your hourly rate working for Google?");

var facebookHours = prompt("How many hours did you work in total for Google?");

var facebookPay =  (facebookRate) * (facebookHours);

alert("This is how much you made working for Facebook: $" + (facebookPay));

var totalPay = (Number(googlePay) + Number(amazonPay) + Number(facebookPay));

alert("This is your total pay from the 3 jobs: $" + totalPay);

//Can you enroll in class? (Boolean)
var ClassSize = confirm("Are they any spots open in the class?");

var ClassConflict = confirm("Are there no schedule conflicts?");

alert("Are you able to enroll? " + (ClassSize && ClassConflict));

//Premium Benefit (Boolean)
var hasMoreThanTwoItems = confirm("Do you have more than two items in your cart?");

var isOfferValid = confirm("Is the offer still valid?");

var isPremiumMember = confirm("Are you a premium member?");

var canUserUseOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid;

alert("You can use this offer is a " + canUserUseOffer + " statement.");

//You can also do this.

//var hasEnoughItems = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid;
//
//var canUseOffer = hasEnoughItems && isOfferValid;
