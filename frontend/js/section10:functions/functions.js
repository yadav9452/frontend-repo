"use strict";
//  functions are the building blocks of any programs

// default parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 10,
  price = 199 * numPassengers
) {
  /In ES5
  //if any of the parameters are missing and if we want to give the default values
  //   numPassengers = numPassengers || 100;
  //   price = price || 2000;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123"); // {flightNum: 'LH123', numPassengers: undefined, price: undefined}
createBooking("LH123", 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking("LH123", 4);
createBooking("LH123", 49);
// createBooking('LH123',  , 4) THIS IS NOT VALID
// skipping the value in between the variable is not valid so in place of that we may give the undefined value
createBooking("LH123", undefined, 300);

*/

/*
// Arguments: value and reference types
// when we pass a primitive value(variable name) as an argument then it behaves like a call by value passing.
// when we pass a reference type like object, arrays, functions then it will be call by reference passing.

const flight = "LH123";
const jonas = {
  name: "jonas schmedtmann",
  passport: 1234567890,
};

const checkIn = (flightNum, passenger) => {
  flightNum = "LH1999";
  passenger.name = `Mr.${passenger.name}`;
  if (passenger.passport === 1234567890) {
    console.log("CheckedIn");
  } else {
    console.log("wrong passport");
  }
  console.log(flightNum); // LH1999
};

checkIn(flight, jonas);
console.log(flight); // LH123
console.log(jonas); // {name: 'Mr.jonas schmedtmann', passport: 1234567890}
//  due to memory heap address of the obects get referenced

const newPassport = (person) => {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas); // function to create a new passport.
console.log(jonas); // {name: 'Mr.jonas schmedtmann', passport: 75040197} // random passport number
checkIn(flight, jonas); // wrong passport

//  JS DOESNOT HAVE CALL BY REFERENCE
//  IN CASE OF OBJECT WE DO HAVE A REFENCE AS A VALUE FOR THE OBJECT STORED IN THE HEAP
//  WE PASS A VALUE TO REFERENCE BUT NOT BY REFERNCE
*/

/*
// FIRST CLASS FUNCTION & HIGH ORDER FUNCTIONS

//FIRST CLASS FUNCTION; A first-class function is a function that can be treated like any other data type
//  in a programming language. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.
// 1. store function in variables or properties.
const add = (a, b) => a + b;
const counter = {
  value: 25,
  inc: function () {
    this.value;
  },
};

// 2. Pass functions as arguments to OTHER function
const greet = () => {
  console.log("Hey jonas");
};
btnClose.addEventListener("click", greet);
// 3. returns functions FROM functions
// 4. Call Methods on functions
counter.inc.bind(someOtherObject);

// HIGHER ORDER FUNCTIONS
// A function that receives another function as an argument,
// A functions that returns a new function
// or both
// this is possible because of first class function.

// 1. function that receives another function
const greet1 = () => {
  console.log("hey jonas");
};
btnClose.addEventListener("click", greet1);
// addEventListener is a higer order function
// greet1 is a callback function

// 2. function that returns new functions
function count() {
  // highorder functions
  let counter = 0;
  return function () {
    //returned functions
    counter++;
  };
}
*/

// HIGHER ORDER FUNCTIONS

const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperfirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer("Javascript is best ", upperfirstWord);
transformer("Javascript is best ", oneWord);

//  ABSTRACTION: HIDES THE DEATILS

// 2. FUNCTION RETURING THE FUNCTIONS
const greet2 = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//1.
const greeterHey = greet2("Hey");
console.log(greeterHey);
greeterHey("jonas");
greeterHey("rahul");

//2
greet2("Hello")("john");

// using arrow function
const greetArr =
  (greeting) =>
  (name = "RAHUL") =>
    console.log(`${greeting} ${name}`);
greetArr("HELLO")("BRUCE");

// THE CALL AND APPLY METHODS
