"use strict";
// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();

/*
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); // print an array of argument
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 10, 4);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 4, 8); // arguments are not defined
*/
/*
// primitive vs reference type
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge);// 30

const me = {
  name: "rahul",
  age: 29,
};
const albin = me;
albin.age = 27;
console.log("friend:", albin);//friend: {name: 'rahul', age: 27}
console.log("me:", me);//me: {name: 'rahul', age: 27}
*/
/*
// array destructuring
const restaurant = {
  name: "asha tiffens",
  location: "hsr sector 6",
  categories: ["Indian", "Italian", "Chinese", "Veg"],
  starterMenu: ["tikka", "platter", "kabab", "sushi"],
  mainMenu: ["pizza", "pasta", "risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// 1.normal way to get values from an array
const arr = [1, 2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c);

// 2. array destructure
const [x, y, z] = arr;
// console.log(x, y, z);

// 3. from object
let [dish1, dish2] = restaurant.starterMenu;
// console.log(dish1, dish2);
// 4. value will be assingned as per the index 0 and number of variable declared
let [nonveg, , , veg] = restaurant.categories;
// console.log(veg, nonveg);
// empty spaces will be like empty

// 4. swapping the values without using third variable
[veg, nonveg] = [nonveg, veg];
// console.log(veg, nonveg);

// 5. destructure the values returned from the function
console.log(restaurant.order(2, 0)); //['kabab', 'pizza']
const [d1, d2] = restaurant.order(1, 2);
console.log(d1, d2);

// 6. nested array destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); //(2) [5, 6]
// in one statement
const [p, , [q, r]] = nested;
console.log(p, q, r);

// default values
const [d, e, f] = [8, 9];
console.log(d, e, f); //8 9 undefined

const [g = 1, k = 1, l = 1] = [3, 2];
console.log(g, k, l);// 3 2 1

*/

/*
// Object Destructuring
const restaurant = {
  name: "asha tiffens",
  location: "hsr sector 6",
  categories: ["Indian", "Italian", "Chinese", "Veg"],
  starterMenu: ["tikka", "platter", "kabab", "sushi"],
  mainMenu: ["pizza", "pasta", "risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, time, address, mainIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
// 1. simple destructuring
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// 2. change the name of the variable while destructuring
// key will the name of the keys in the objects and the value are new
// variable name.
// {openingHour: hours}
// {object_key: variable_name}
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// 3. setting the default value, when a property is not present in the object
// then we may give the default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// 4. mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// 5. Nested Object
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// 6. object as argument and parameter

restaurant.orderDelivery({
  time: "22:30",
  address: "hsr sector 6",
  // mainIndex: 2,
  // starterIndex: 2,
});
// 7. default value as function parameters
// same as in array destrct.
*/
/*
// spread operator
const restaurant = {
  name: "asha tiffens",
  location: "hsr sector 6",
  categories: ["Indian", "Italian", "Chinese", "Veg"],
  starterMenu: ["tikka", "platter", "kabab", "sushi"],
  mainMenu: ["pizza", "pasta", "risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, time, address, mainIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log("badArr", badArr); //(5) [1, 2, 7, 8, 9]

// 1. use in array to get the whole arrays  as it is
const newArr = [1, 2, ...arr];
console.log("newArr", newArr); //(5) [1, 2, 7, 8, 9]

// 2. use in function
// when we need the array elements individually like 1 2 3 4
console.log(...newArr); //1 2 7 8 9

// 3. inserting new element in array.
const newMenu = [...restaurant.mainMenu, "biryani", "paratha"];
console.log(newMenu);

// 4. copy the array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 5. join two array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// spread operators works on all iterables
// array, string, maps, set
// not objects

// 6. on strings
const str = "Roger";
let letters = [...str];
// convert into array and keeping all letter individual indexes
console.log(letters); //(5) ['R', 'o', 'g', 'e', 'r']
console.log(...str); // R o g e r
// examples
const ingredients = [
  // prompt("lets make pasta! Ingredients 1 ?"),
  // prompt("Ingredients 2 ?"),
  // prompt("ßIngredients 3 ?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// 7. ES2018 spread operator also works on objects
//  we can add this
const newRestaurant = { foundedIn: 2022, ...restaurant, founder: "bhagwaan" };
console.log(newRestaurant);

// 8. shallow copy: object copied and each will be individual object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "south Inn";
console.log(restaurant);
console.log(restaurantCopy);

*/
/*
// rest operator
const restaurant = {
  name: "asha tiffens",
  location: "hsr sector 6",
  categories: ["Indian", "Italian", "Chinese", "Veg"],
  starterMenu: ["tikka", "platter", "kabab", "sushi"],
  mainMenu: ["pizza", "pasta", "risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, time, address, mainIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    // console.log(mainIngredient);
    console.log(mainIngredient, otherIngredient);
  },
};

//1. SPREAD, because on the RIGHT side of =
const arr_1 = [1, 2, ...[3, 4]];
console.log(arr_1);

//2. REST , because on the LEFT side of =
const [a1, b1, ...others_1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1, others_1);

//3. usig ... on both the sides
const [pizza, risotto, ...others_2] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// the single array is created and then destructuring is done
// so the variable name on the left hand side will refer the indexes in increaing order ,
// rest will collect all the remaining elements but take reference of the previous index
// if any index is skipped before the rest operator then it will not be included.
// generally it will the last in the array to collect all the remaining elements
console.log(pizza);
console.log(risotto);
console.log(others_2);

// 4. spread with object
// in object destructuring the key name should be same on the LEFT side of =
const { fri, ...days } = restaurant.openingHours;
console.log(fri, days);

// 5. Functions
// takes multiples number as parameter and pack them in an array
const add = function (...number) {
  // rest operator
  console.log(number);
  // can calculate the sum
};
add(2, 3);
add(5, 3, 7, 2);

// 6. sending array as spread in arguments
const arr_3 = [1, 2, 3, 4, 5];
add(...arr_3); // spread operator
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// summary
// both looks same and work in the opposite way
// spread operator used when we write value seperated via ,
// rest opearot used where we use variable sepearted via ,
//Spread is used for expansion, where you want to "spread" elements or properties out.
//Rest is used for collecting multiple elements into one variable, usually at the end of a function parameter list.
*/

/*
// for-of loop
//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists:

const restaurant = {
  name: "asha tiffens",
  location: "hsr sector 6",
  categories: ["Indian", "Italian", "Chinese", "Veg"],
  starterMenu: ["tikka", "platter", "kabab", "sushi"],
  mainMenu: ["pizza", "pasta", "risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, time, address, mainIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    // console.log(mainIngredient);
    console.log(mainIngredient, otherIngredient);
  },
};
// iterate through the array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// to access elements of array
for (const item of menu) console.log(item);
// to access the index also

for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// 2. alternative of above example with the help of
// destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// object literals
// {}
// three ways to write object literals.
// 1. openingHours: openingHours
// in place of this we can write openingHours
// 2. methods can be writen without function keywords
/*
orderPasta(ing1, ing2, ing3) {
    console.log(`here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
*/
// 3. computation of values can be done in property
const weekdays = ["mon", "tues", "wed", "thur", "fri", "sat"];
const obj = {
  openingHours: {
    [weekdays[0]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

console.log(obj.openingHours);

//  optional chaining ?
//   it will check for the key if it exist in the object as property.
//  it return the undefined if the property not exists
//  also works on methods, arrays

// Looping Objects: object keys, values and entries

// 1. using the Object.keys ACCESS PROPERTY NAME
for (const day of Object.keys(obj?.openingHours)) {
  console.log(day); // mon fri sat
}
// object .keys returns an array of the properties of Object
const properties = Object.keys(obj.openingHours);
console.log(properties); // (3) ['mon', 'fri', 'sat']

// 2. PROPEERTY VALUES
c 