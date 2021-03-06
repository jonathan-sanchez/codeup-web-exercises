"use strict"
console.log("What up Jon! These are your JS functions!");
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

// function makesTen(a, b) {
//     if (a === 10 || b === 10 || a + b === 10) { //Logical OR (||)
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(makesTen(3, 7));

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

//Greeting:
function greeting(name){
    if(name === "Jonathan") {
        return "Hello, my Love!";
    }
    return "Hello, " + name + "!";

}
console.log(greeting("Jonathan"));

//Divisible by 5:
function divisibleByFive(n) {
    if (n % 5 === 0){
        return true;
    }
    console.log("That number is not divisible by 5");
}
console.log(divisibleByFive(4));

//Area of a rectangle if false - 1:

function area(h, w) {
    if (h <= 0 || w <= 0) {
        return - 1;
    }
    return h * w;
}
console.log(area(0, 0));

//isEven function:

function isEven(num){
    if (num % 2 === 0) {
        return true;
    }
    else if(num % 2 === 1) { //If num is odd return false
        return false;
    }
}
console.log(isEven(1));

function returnNeg(number) {
    return -Math.abs(number);
}

console.log(returnNeg(5));

const getNumRange = (a, b) =>
    Array.from({length: b - a - 1}, (_, i) => i + a + 1);

console.log(getNumRange(12, 50));

//Solve for Equation:

function equation(s) {
    return eval(s);
}

console.log(equation(eval(1+1)));

//Compare string size:

function comp(str1, str2) {
    return str1.length === str2.length;
}

console.log(comp("J", "H"));

//Return length of string:

function length(str) {
    return str.length;
}
console.log(length("Allo Govna!"));

//Array reversal:

function reverseArr(arr) {
    return arr.reverse();
}

console.log(reverseArr([1, 2, 3, 4, 5, 6]));

//Repeat string function:

function repeatString(str, count) {
    if (typeof(str) === "string") {
        return str.repeat(count);
    }
        return "Not A String!!";
}

console.log(repeatString("Hannah", 1));

//Operator Function using eval():

function operator(num1, num2, operator) {
    return eval(num1 + operator + num2);
}

console.log(operator(7, 7, "*"));

//another way using if statements:

// function operator(num1, num2, operator) {
//     if (operator === "+"){
//         return num1 + num2
//     }else if (operator === "-"){
//         return num1 - num2
//     }else if (operator === "*"){
//         return num1 * num2
//     }else if (operator === "/"){
//         return num1 / num2
//     } else if (operator === "%"){
//         return num1 % num2
//     }
// }
//
// console.log(operator(9, 9, "*"));


//Arrays:

//Write a JS function to check if an input is an Array or not:

function isArray(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
        return true;
}
console.log(isArray("This is a String!"));

//Write a function to clone an Array:

var arrayClone = function cloneArr(arr) {
    return arr.slice(0);
};

console.log(arrayClone([1,2, [4, 0]]));

//Get first element of an Array:

function getFirstArrElement(arr) {
    return arr[0];
}

console.log(getFirstArrElement([1,2,3,4,5]));

//Get last element of an Array:

function getLastArrElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastArrElement([4,1,9,3]));

//Join Array elements into a string:

function arrToString(arr) {
    return arr.join().toString();
}

console.log(arrToString(["red","green","white","black"]));

//

function arrValue(arr, i) {
    return arr[Math.floor(i)];
}

console.log(arrValue(5, 2));

// function findDifference(a, b) {
//     return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
// }
//
// console.log(findDifference());


//Lets mutate this array:

let concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
    arr[3] = 'MUTATED';
}

// changeArr(concept);

console.log(concept);