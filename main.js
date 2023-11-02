// Creating an array

// Array Literals
let fruits = ["apple", "banana", "strawberry"];

console.log("Fruits");
// The result here shows the entire content of the fruits array
console.log(fruits);

// Result:
/**
 ['apple', 'banana', 'srawberry']
 */

// We can use a foor loop to iterate through the array of fruits
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Result:
/**
 apple
 banana
 strawberry
 */

// Array Contructor
// On this example you can pass the items you want in your array as arguments
let colors = new Array("red", "black", "blue");

console.log("Colors");

console.log(colors);

// Result:
/**
 ['red', 'black', 'blue']
 */

//  display each individual color by using a for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Result
/**
  red
  black
  blue
 */

// Using an Array with a defined length
let emptyArray = new Array(7);

console.log("Empty Array");

console.log(emptyArray);

// Result:
/**
 (7) [empty × 7]
 */

for (let i = 0; i < emptyArray.length; i++) {
  console.log(emptyArray[i]);
}

// Result:
/**
7 undifined
 */

// Using Array.from() method
let text = "Hello";
let characters = Array.from(text);

console.log("Array.from() method");

console.log(characters);

// Result:
/**
 (5) ['H', 'e', 'l', 'l', 'o']
 */

// Spread Operator
let numbers = [1, 2, 3];
let copyOfNumbers = [...numbers];

console.log("Spread Operator");

console.log(copyOfNumbers);

// Result:
/**
 [1, 2, 3]
 */

// Using the fill() method
let zeros = new Array(4).fill(0);

console.log("Array fill method");

console.log(zeros);

// Result:
/**
[0, 0, 0, 0]
 */

// Accessing Elements:

let firstFruit = fruits[0]; // Result: apple

// Adding and Removing Elements:

// The push() method is used here to add an element to the end of the array of fruits
fruits.push("pear");

// Result: ['apple', 'banana', 'strawberry', 'pear']

// The pop() method is used here to remove the last element of the array of fruits

let removedFruit = fruits.pop(); // pear is removed.

// Result: ['apple', 'banana', 'strawberry']

// Changing an Element:
// on this example the index 1 is changed to orange, so in our array is the second element
fruits[1] = "orange";

console.log(fruits);

// Result: ['apple', 'orange', 'strawberry']

// Finding the length of the array:

let numberOfFruits = fruits.length; // Result: 3

// Looping through an Array:

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Result:
/**
 apple
 banana
 strawberry
 */
