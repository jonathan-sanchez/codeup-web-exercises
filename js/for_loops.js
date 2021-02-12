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
for (var i = 0; i <= 10 ; i++){
    var random = Math.floor((Math.random() * 200) + 20);
    if (random % 2 === 0){
        console.log(random + " is even");
    }else{
        console.log(random + " is odd");
    }
}

// for (var i = 1; i < 10; ++i){
//     var
//     if(i === 1 ){
//         console.log();
//     }
// }

// for (var i = 100; i >= 5; i = i - 5) {
//     var userNum = prompt("Please give me an odd number!");
//     if (userNum % 3 === 0) {
//         console.log(userNum + " is an odd number!");
//     }else{
//         console.log(userNum + " is not an odd number!")
//     }
// }
