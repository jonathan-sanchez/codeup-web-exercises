"use strict"
console.log("Math Object Lecture");

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive.
}
//Math.round()
console.log(Math.round(20.49)); // 20
console.log(Math.round(20.5)); // 21
console.log(Math.round(-20.5)); // -20
console.log(Math.round(-20.51)); // -21

//Math.ceil(x);
console.log("Math.ceil(20.0008)", Math.ceil(20.0008)); // 21
console.log("Math.ceil(20.0000)", Math.ceil(20.0000)); // 20
console.log("Math.ceil(15.0001)", Math.ceil(15.0001)); // 16
console.log("Math.ceil(-11.0010", Math.ceil(-11.0010)); // -11

//Math.floor(x);
console.log("Math.floor(20.999999", Math.floor(20.999999)); // 20
console.log("Math.floor(15.000001", Math.floor(15.000001)); // 15
console.log("Math.floor(-12.888888", Math.floor(-12.888888)); // -13
console.log("Math.floor(-17.123456", Math.floor(-17.123456)); // -18

//Math.pow();
//2 raised to the 16th power:
console.log("Math.pow(2, 16)", Math.pow(2, 16)); // Result: 65536

//Math.sqrt();
console.log("Math.sqrt(9)", Math.sqrt(9)); // 3
console.log("Math.sqrt(2)", Math.sqrt(2)); // 1.4142135623730951
console.log("Math.sqrt(1)", Math.sqrt(1)); // 1
console.log("Math.sqrt(0)", Math.sqrt(0)); // 0
console.log("Math.sqrt(-1)", Math.sqrt(-1)); // NaN

//Math.PI
console.log(Math.PI);
