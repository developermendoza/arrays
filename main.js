// // Creating an array

// // Array Literals
// let fruits = ["apple", "banana", "strawberry"];

// console.log("Fruits");
// // The result here shows the entire content of the fruits array
// console.log(fruits);

// // Result:
// /**
//  ['apple', 'banana', 'srawberry']
//  */

// // We can use a foor loop to iterate through the array of fruits
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // Result:
// /**
//  apple
//  banana
//  strawberry
//  */

// // Array Contructor
// // On this example you can pass the items you want in your array as arguments
// let colors = new Array("red", "black", "blue");

// console.log("Colors");

// console.log(colors);

// // Result:
// /**
//  ['red', 'black', 'blue']
//  */

// //  display each individual color by using a for loop
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// // Result
// /**
//   red
//   black
//   blue
//  */

// // Using an Array with a defined length
// let emptyArray = new Array(7);

// console.log("Empty Array");

// console.log(emptyArray);

// // Result:
// /**
//  (7) [empty × 7]
//  */

// for (let i = 0; i < emptyArray.length; i++) {
//   console.log(emptyArray[i]);
// }

// // Result:
// /**
// 7 undifined
//  */

// // Using Array.from() method
// let text = "Hello";
// let characters = Array.from(text);

// console.log("Array.from() method");

// console.log(characters);

// // Result:
// /**
//  (5) ['H', 'e', 'l', 'l', 'o']
//  */

// // Spread Operator
// let numbers = [1, 2, 3];
// let copyOfNumbers = [...numbers];

// console.log("Spread Operator");

// console.log(copyOfNumbers);

// // Result:
// /**
//  [1, 2, 3]
//  */

// // Using the fill() method
// let zeros = new Array(4).fill(0);

// console.log("Array fill method");

// console.log(zeros);

// // Result:
// /**
// [0, 0, 0, 0]
//  */

// // Accessing Elements:

// let firstFruit = fruits[0]; // Result: apple

// // Adding and Removing Elements:

// // The push() method is used here to add an element to the end of the array of fruits
// fruits.push("pear");

// // Result: ['apple', 'banana', 'strawberry', 'pear']

// // The pop() method is used here to remove the last element of the array of fruits

// let removedFruit = fruits.pop(); // pear is removed.

// // Result: ['apple', 'banana', 'strawberry']

// // Changing an Element:
// // on this example the index 1 is changed to orange, so in our array is the second element
// fruits[1] = "orange";

// console.log(fruits);

// // Result: ['apple', 'orange', 'strawberry']

// // Finding the length of the array:

// let numberOfFruits = fruits.length; // Result: 3

// // Looping through an Array:

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // Result:
// /**
//  apple
//  banana
//  strawberry
//  */

// // Array Methods

// // push(element)
// // This method adds an element to the end of the array and returns the new length of the array
// let cars = ["toyota", "honda", "acura"];

// let addNewItem = cars.push("chevrolet");

// console.log(addNewItem); // Result: 4
// console.log(cars); // Result: ['toyota', 'honda', 'acura', 'chevrolet']

// // pop()
// // Removes the last element from the array and returns the removed element

// let removeLastCar = cars.pop();
// console.log(removeLastCar); //Result: chevrolet
// console.log(cars); // Result: ['toyota', 'honda', 'acura']

// // unshift(element)
// // Adds an element to the beginning of the array and return the new length of the array

// let addItemToBeginning = cars.unshift("BMW");
// console.log(addItemToBeginning); //Result : 4
// console.log(cars); //Result : ['BMW', 'toyota', 'honda', 'acura']

// /*********************

// shift()
// Description: Removes the first element from the array and returns the removed element

//  *********************/

// let cities = ["New York", "San Francisco", "Chicago", "San Diego"];
// let removeFirstItem = cities.shift();
// console.log(removeFirstItem); //Result: New York
// console.log(cities); //Result: ['San Francisco', 'Chicago', 'San Diego']

// /*********************

// concat()
// Description: Combines two or more arrays and returns a new array

//  *********************/

// let people1 = ["john", "marie", "bob"];
// let people2 = ["joe", "max", "jeniffer"];
// let people3 = ["james", "patrick", "sam"];

// let combineItems = people1.concat(people2, people3);
// console.log(combineItems); //Result:['john', 'marie', 'bob', 'joe', 'max', 'jeniffer', 'james', 'patrick', 'sam']

// /*********************

// join(separator)
// Description: Converts the elements of an array into a string,
// with each element separated by the specific separator

//  *********************/

// let people1Join = people1.join(" and ");
// console.log(people1Join); //Result: john and marie and bob

// /*********************

// slice(start, end)
// Description: Returns a shallow copy of a portion of an array between the specified start and end indices.
// The original array is not modified.

//  *********************/

// let slicePeople1 = people1.slice(0, 2);
// console.log(slicePeople1); //Result: ['john', 'marie']

// /*********************

// splice(start, deleteCount, element1, element2, ...)
// Description: Changes the contents of an array by removing, replacing, or adding elements

//  *********************/

// let languages = ["english", "french", "spanish", "japanese", "portuguese"];

// languages.splice(2, 1); // here it'll start on index 2 and delete 1 element, if you would type 2 then it would delete 2 items
// console.log(languages); // Result: ['english', 'french', 'japanese', 'portuguese']

// languages.splice(2, 0, "catonese", "vietnamese"); // here it starts at element 2 and we want 0 items removed, if you put 1 then spanish will removed and then add the other languanges
// console.log(languages); // Result: ['english', 'french', 'japanese', 'portuguese']

/*********************


indexOf(element, fromIndex)
Description: Returns the first index at which a specified element is found in the array, or -1 if it's not found


 *********************/

// const fruits = ["apple", "banana", "cherry", "orange", "cherry"];

// const firstIndex = fruits.indexOf("cherry");
// console.log(firstIndex); //2

// // now lets start from index 3 to find the other cherry
// const secondIndex = fruits.indexOf("cherry", 3);
// console.log(secondIndex); // 4

// // if an element does not exist it'll return -1
// const notFoundIndex = fruits.indexOf("grape");
// console.log(notFoundIndex); // -1

/*********************


lastIndexOf(element, fromIndex)
Description:  Returns the last index at which a specified element is found in the array, or -1 if it's not found.


 *********************/

// const fruits = [
//   "apple",
//   "banana",
//   "cherry",
//   "pear",
//   "orange",
//   "cherry",
//   "strawberry",
// ];

// const lastIndex = fruits.lastIndexOf("cherry");
// console.log(lastIndex); // 5

// // on this example lets start from index 3
// const lastIndexFromIndex = fruits.lastIndexOf("cherry", 3);

// console.log(lastIndexFromIndex); // 2.  Since pear is index 3, that now becomes 0 and cherry is index 2

// // if an element is not found it'll return a -1

/*********************


find(callback)
Description:  Returns the first element in the array that satisfies the provided testing function.


 *********************/

// const numbers = [10, 20, 30, 40, 50];

// // Using find() to find the first element greater than 25

// const result = numbers.find(function (element) {
//   return element > 25;
// });
// console.log(result); // 30

/*********************


findIndex(callback)
Description:  Returns the index of the first element in the array that satisfies the provided testing function.


 *********************/

// const numbers = [10, 20, 30, 40, 50];

// const index = numbers.findIndex(function (element) {
//   return element > 35;
// });

// console.log(index); //2

/*********************


filter(callback)
Description: Creates a new array with all elements that pass the test implemented by the provided function.


 *********************/

// const numbers = [10, 20, 30, 40, 50];

// const filteredNumbers = numbers.filter(function (element) {
//   return element > 25;
// });

// console.log(filteredNumbers); // [30, 40, 50]

/*********************


map(callback)
Description: Creates a new array by applying a function to each element in the array.


 *********************/

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(function (element) {
//   return element * 2;
// });

// console.log(doubleNumbers); //[2, 4, 6, 8, 10]

/*********************


forEach(callback)
Description: Executes a provided function once for each array element.


 *********************/

// const fruits = ["apple", "banana", "cherry"];

// // Using forEach() to log each element to the console
// fruits.forEach(function (element) {
//   console.log(element);
// });

// Result:

/**
apple
banana
cherry
 */

/*********************


reduce(callback, initialValue)
Description: Reduces the array to a single value by applying a function to each element, left to right.


 *********************/

// const numbers = [1, 2, 3, 4, 5];

// // using reduce() to calculate the sum of all numbers

// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); //15

/*********************


reduceRight(callback, initialValue)
Description: Reduces the array to a single value by applying a function to each element, right to left.


 *********************/

// const numbers = [1, 2, 3, 4, 5];

// // Using reduceRight() to calculate the sum of all numbers in reverse order
// const sum = numbers.reduceRight(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // 15

/*********************


every(callback)
Description: Tests whether all elements in the array pass the test implemented by the provided function.


 *********************/

// const numbers = [2, 4, 6, 8, 10];

// // Using every() to check if all numbers are even
// const areAllEven = numbers.every(function (element) {
//   return element % 2 === 0;
// });

// console.log(areAllEven); // true

/*********************


some(callback)
Description: Tests whether at least one element in the array passes the test implemented by the provided function.


 *********************/

/*********************


sort(compareFunction)
Description:  Sorts the elements of an array in place and returns the sorted array.


 *********************/

/*********************


reverse()
Description:   Reverses the order of elements in the array.


 *********************/

/*********************


includes(element, fromIndex)
Description:   Determines whether the array contains a certain element, returning true or false.


 *********************/

/*********************


isArray(obj)
Description: Checks if a given object is an array and returns a Boolean value.



 *********************/

/*********************


fill(value, start, end)
Description: Fills the array with a static value from the start index to the end index.



 *********************/
