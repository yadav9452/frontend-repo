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
// refer the
// slice
// splice
// concat
// reverse
// join
// at method in string and array
// foreach methods on arrays: the order matters - forEach((current_element , index , array))
// high order funcitons
// for each on maps and sets

// Map, filter and reduce
// try with the examples
// reduce methods: return one value (acc, curr, i , arr)
// chaining the methods
// find methods
// find vs filter
// findIndex mehtods:
// some methods
// every methods
// includes
// flat and flatmaps(only one level deep) methods:- by default one level deep
// array.sort()
// more ways to create and fill the arrays.
// 1.
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// 2.
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));
// 3.
const x = new Array(7);
// map doesnot work here
x.fill(1);
// this method will fill the whole array with the same value
console.log(x);

// which array method to use
