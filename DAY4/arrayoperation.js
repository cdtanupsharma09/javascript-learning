//array is globsl object used to store data in a list-like format.

//CREATE ARRAY
// let fruits = ["apple","banana","mango"];
// console.log(fruits[0]); //ACCESS ELEMENTS
// console.log(fruits[1]); //ACCESS ELEMENTS
// console.log(fruits[2]); //ACCESS ELEMENTS

//UPDATE ELEMENT
// let fruits = ["apple", "banana","mango"];
// fruits[1] = "orange";
// console.log(fruits);

//ADDING ELEMRENTS USING PUSH
// let fruits = ["apple", "banana","mango"];
// fruits.push("grapes");
// console.log(fruits);

//ADDING ELEMENT USING UNSHIFT
// let fruits = ["apple", "banana","mango"];
// fruits.unshift("pineapple");
// console.log(fruits);

//REMOVE LAST ELEMENT USING POP
// let fruits = ["apple", "banana","mango"];
// fruits.pop();
// console.log(fruits);

//REMOVE FIRST ELEMENT USING SHIFT
// let fruits = ["apple", "banana","mango"];
// fruits.shift();
// console.log(fruits);

//FOR LOOP(loop repeats codes again and again)
// let fruits = ["apple", "banana", "mango"];
// // console.log(fruits)
// for(let i = 0; i < 4; i++)
// {
//     console.log(fruits[i]);

// }

//FOR EACH (run code for every element)
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach(function(item) {
//     console.log(item);
// });

// INCLUDES (CHECKS WEARHER THat element exist or not)
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.includes("Apple"));

// INDEXOF(position of an element)
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Apple"));

// SLICE()