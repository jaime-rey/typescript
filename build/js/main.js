"use strict";
// Literal types
let myName;
let userName;
userName = 'Amy';
//functions
let add = function (a, b) {
    return a + b;
};
const logMsg = (message) => console.log(message);
let subtract = function (c, d) {
    return c - d;
};
logMsg('hello!');
logMsg(add(2, 3));
logMsg(null);
logMsg(subtract(1, 2));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(9, 8));
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(3, 6, 8, 34, -123));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
