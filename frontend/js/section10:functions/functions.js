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
/*
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
*/

// THE CALL, APPLY AND BIND METHODS
//  changing the referenc of this keyword or manipulating the this keywords
// manually setting this keyword

/*
const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Deepali Yadav");
lufthansa.book(635, "Roshan Adhikari");
console.log(lufthansa.booking);
// this is the example where a method is used for one object
//  now lets use the function from object 1 in the other object.
// assigning book method to a variable
const book = lufthansa.book;

const eurowings = {
  airline: "EuroWings",
  iatacode: "EW",
  booking: [],
};
// method.call(targetObject, all_arguments);
book.call(eurowings, 23, "Divya Yadav");
book.call(lufthansa, 439, "Babu Yadav");
const swiss = {
  airline: "swiss Air Index",
  iatacode: "LX",
  booking: [],
};
book.call(swiss, 583, "Pihu Yadav");
console.log(lufthansa);
console.log(eurowings);
console.log(swiss);

// APPLY Methods
// it does the same thing but it receive the array of the argument instead of list of arguments
const flightData = [583, "Ramesh Yadav"];
book.apply(swiss, flightData);

// in modern js this methods is rarly used since we can use the call method with spread operator
book.call(swiss, ...flightData);
console.log(swiss);
// the above method will work in the same way.

//BIND METHODS
// 1. it sets the object method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

console.log(bookEW);
bookEW(23, "Rahul");
bookLH(583, "Suzaen");

//  we can also give intial argument with bind methods
const bookEW23 = book.bind(eurowings, 23);
bookEW23("sarthak");
bookEW23("akshay");

// 2. With EVENT LISTENER how to use the bind method
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector(".buy-plane")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// 3. partial application on bind methods
// preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT= value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION are not used nowdays in modrn js
// since due to let and const the data encapsulation
// 1. first way
const runOnce = function () {
  console.log("this will never run");
};
runOnce();

// IIFE
(function () {
  console.log("this will never run again");
})();

// for arrow function
(() => console.log("this arrow function will never run again"))();
// Why these pattern created for IIFE
*/

// CLOSURES: THIS IS THE SITUATION IN CODE 
