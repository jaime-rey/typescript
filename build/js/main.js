"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = '42';
stringArr.push('hey');
guitars[0] = 1984;
console.log(guitars.unshift('Strat'));
let test = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Dave', 42, true];
console.log(myTuple);
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
    prop3: 44
};
let evh = {
    name: 'Eddie',
    albums: [1984, 5150, 'OU812']
};
console.log(evh);
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 42] = "U";
    Grade[Grade["D"] = 43] = "D";
    Grade[Grade["C"] = 44] = "C";
    Grade[Grade["B"] = 45] = "B";
    Grade[Grade["A"] = 46] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
