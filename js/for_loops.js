"use strict"
//For-loops exercise:

// for (var i = 0; i < 50; i++){
// 	if(i === 25){
// 		continue;
// 	} else if (i % 6 === 0){
// 		console.log("Codeup")
// 	} else if (i % 2 === 0){
// 		console.log("Code")
// 	} else if (i % 3 === 0) {
// 		{
// 			console.log("Up")
// 	}
// 		console.log(i);
// 	}
// }
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++ ) {
        var result = num * i;
        console.log(num + " x " + i + " = " + result);
    }

}
showMultiplicationTable(7)
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

// sayHelloXTimes(60)



// for (var i = 0; i <= 10; i++) {
//     var result = num * i;
//     console.log(num + ' * ' + i + ' = ' + result);
// }
//
//
// for (var multiplier = 0; multiplier <= 10; multiplier++) {
//     for (var i = 0; i <= 10; i++) {
//         var result = multiplier * i;
//         console.log(multiplier + ' * ' + i + ' = ' + result);
//     }
