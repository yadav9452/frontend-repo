"use strict";
// array methods: fn attached to the arrays
// arrays are objects

let arr = [1, 2, 3, 4, 5, 6];
// 1. slice: The slice() method of Array instances returns a shallow copy
//  of a portion of an array into a new array object selected from start
// to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.
console.log(arr);
console.log(arr.slice()); // (6) [1, 2, 3, 4, 5, 6]
console.log(arr.slice(0)); // (6) [1, 2, 3, 4, 5, 6]
console.log(arr.slice());
