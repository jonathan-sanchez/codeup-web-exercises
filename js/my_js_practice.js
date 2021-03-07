"use strict"
console.log("What up Jon! This is your practice JS file!");
//My JavaScript Functions:
//
//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// Examples
//
// makesTen(9, 10) ➞ true
//
// makesTen(9, 9) ➞ false
//
// makesTen(1, 9) ➞ true

function makesTen(a, b) {
    if (a === 10 || b === 10 || a + b === 10) { //Logical OR (||)
        return true;
    } else {
        return false;
    }
}
console.log(makesTen(3, 7));

//Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
//Examples
//
// divisible(1) ➞ false
//
// divisible(1000) ➞ true
//
// divisible(100) ➞ true

function divisible(num) {
    return num % 100 === 0;
}
console.log(divisible(100));

//Given two arguments, return an array which contains these two arguments.
//
//makePair(1, 2) ➞ [1, 2]
//
// makePair(51, 21) ➞ [51, 21]
//
// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2) {
    var arr = [num1, num2];
    return arr;
}
console.log(makePair(51, 21));

//Destructuring Assignment:

//You can assign variables from arrays like this:
//
// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// first = arr[0]
// second = arr[1]
// third = arr[2]
// other = arr.slice(3)
//
// console.log(first) ➞ outputs 1
// console.log(second) ➞ outputs 2
// console.log(third) ➞ outputs 3
// console.log(other) ➞ outputs [4, 5, 6, 7, 8]
//
// However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).
// Examples
//
// first ➞ 1
//
// second ➞ 2
//
// third ➞ 3
//
// other ➞ [4, 5, 6, 7, 8]
//
// Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.

// writeYourCodeHere = [1, 2, 3, 4, 5, 6, 7, 8];
// let [first,second,third,...other] = [1,2,3,4,5,6,7,8];
//console.log([first, second]);

//Frames per Second:
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
//
// frames(1, 1) ➞ 60
//
// frames(10, 1) ➞ 600
//
// frames(10, 25) ➞ 15000
function frames(minutes, fps) {
    return minutes * (fps * 60); //1 FPS equals 60, multiply fps, then multiply total fps by minutes.
}
console.log(frames(10, 25));

//Check if an integer is divisible by 5 or 2:
function divisibleByFiveOrTwo(number) {
    if(number % 5 === 0) {
        return number;
    }else if(number % 2 === 0){
        return number;
    }
    return false;
}
console.log(divisibleByFiveOrTwo(13));