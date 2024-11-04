// github for the reference:- https://github.com/rmolinamir/typescript-cheatsheet?tab=readme-ov-file#string
const myName: string = "Roberts";
const myAge: number = 24;
// boolean
const isMarried: boolean = true;
// arrays
const myMarks: number[] = [23, 45, 65, 67];
// tuples like structure in c++ , so order matter in this
// and also the number of element with types delcared also important
const myAddress: [string, number, string] = ["street", 99, "road"];
const myCard: any = "bMW";

// console.log(myName);
// console.log(myAge);
// console.log(isMarried);
// console.log(myMarks);
// console.log(myAddress);

// functions in typescript

function greet(name: string): string {
  return `Hello , ${name}`;
}
const message = greet("Alice");
console.log(message);

//

function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log("");
const sum = add(5, 3);
console.log(sum);

// arrow function
const add1 = (num1: number, num2: number): number => {
  return num1 + num2;
};
const sum1 = add1(4, 5);
console.log(sum1);

// In TS, function are of two types

type mathOperation = (a: number, b: number) => number;
const sub: mathOperation = (x: number, y: number) => {
  return x - y;
};

console.log(sub(3, 2));

type printOperation = (a: string, b: number) => string;
const addString: printOperation = (name: string, age: number) => {
  return `${name}${age}`;
};

console.log(addString("rahul", 28));

