"use strict"

/*
For-loops exercise:
 for (var i = 0; i < 50; i++){
 	if(i === 25){
 		continue;
 	} else if (i % 6 === 0){
 		console.log("Codeup")
 	} else if (i % 2 === 0){
 		console.log("Code")
 	} else if (i % 3 === 0) {
 		{
 			console.log("Up")
 	}
 		console.log(i);
 	}
 }
Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

 For example, showMultiplicationTable(7) should output

 7 x 1 = 7
 7 x 2 = 14
 7 x 3 = 21
 7 x 4 = 28
 7 x 5 = 35
 7 x 6 = 42
 7 x 7 = 49
 7 x 8 = 56
 7 x 9 = 63
 7 x 10 = 70
*/
//for (var i = 1; i <= 4; i++) {
//      console.log(i + " x " + number + " = " + (i * number));
//}
//for (var i = 1; i <= 12; i++) {
//  showMulitiplicationTable(i);
//}
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++ ) {
        var result = num * i;
        console.log(num + " x " + i + " = " + result);
    }

}
showMultiplicationTable(7);

// function sayHelloXTimes(num) {
//     for (num; num >= 0; num--) {
//         if (num % 5 === 0) {
//             console.log("Howdy! Currently num is: " + num);
//         } else {
//             console.log("Hello! Currently num is: " + num);
//         }
//     }
//     // return "Hello!";
// }
//
// sayHelloXTimes(60)
//
//
// for (var multiplier = 0; multiplier <= 10; multiplier++) {
//     for (var i = 0; i <= 10; i++) {
//         var result = multiplier * i;
//         console.log(multiplier + ' * ' + i + ' = ' + result);
//     }
//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

for (var i = 0; i <= 10; i++){
    var randomNum = Math.floor((Math.random() * (200 - 20 + 1) + 20));
    if (randomNum % 2 === 0){
        console.log(randomNum + " is even");
    }else{
        console.log(randomNum + " is odd");
    }
}

//Create a for loop that uses console.log to create the output shown.
//Lecture example:
// for (var outerLoop = 1; outerLoop <= 9; outerLoop++) {
//     var output = "";
//     for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
//         output = output + outerLoop;
//     }
//     console.log(output);
// }
//My answer:
var str = "";

for(var x = 1; x <= 9 ; x++) {
    for(var y = 1; y <= x; y++) {
        str += x;
    }
    str += "\n";
}
console.log(str);

//Create a for loop that uses console.log to create the output shown.

for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}
//for (var i = 1; i <= 5; i++) {
//  console.log(i);
//}
//for (var i = 1; i <= 5; i--) {
//  console.log(i);
//}
//for (var i = 1; i <= 5; i -= 2) {
//  console.log(i);
//}
//for (var x = 1;mx <= 4; x++) {
//
//  for (var y = 1; y <= 3; x++) {
//      output = output + y;
//  }
//  console.log(output);
//}