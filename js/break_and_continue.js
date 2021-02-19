"use strict"
//Break and Continue exercise:
//
// for (var i = 1; i < 50; i++) {
//     if (i % 1 === 0) {
//         var num = prompt("Give me an odd number between 1 and 50!");
//         console.log("The number to skip is: " + num);
//     }else if (i % 2 === 0){
//         console.log(prompt("That is not an odd number! Try again!"));
//     }
// }
var i = 0;
do {
    console.log(i);
    i++
}
while (i < 50);