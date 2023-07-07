"use strict";
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
10;
let myVal = addOrConcat(2, 2, 'concat');
console.log(myVal);
let nextVal = addOrConcat(2, 2, 'add');
console.log(nextVal);
//uuy 
//The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
/* img.src
myImg.src
nextImg.src */ 
