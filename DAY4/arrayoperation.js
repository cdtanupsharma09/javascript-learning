//array is global object used to store data in a list-like format.

//CREATE ARRAY
// let fruits = ["apple","banana","mango"];
// console.log(fruits[0]); //ACCESS ELEMENTS
// console.log(fruits[1]); //ACCESS ELEMENTS
// console.log(fruits[2]); //ACCESS ELEMENTS

//UPDATE ELEMENT
// let fruits = ["apple", "banana","mango"];
// fruits[1] = "orange";
// console.log(fruits);

//ADDING ELEMENTS USING PUSH
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
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Banana"));
// console.log(fruits.indexOf("Apple"));

// SLICE(like if you select from 1234 and choose from 1 to 4 it will start from 2 and print 2,3,4 it will exclude 1)
// let nums = [1,2,3,4,5];
// console.log(nums.slice(1,2)); 
// console.log(nums.slice(3));
// console.log(nums.slice(1,4));
// console.log(nums.slice(1,5));

//SPLICE (delete middle element)
// let nums = [1,2,3];
// nums.splice(1,1);
// console.log(nums);

// MAP 
//  let nums = [1,2,3];
// let doubled = nums.map(num => num * 2);//important point is it multiplies every number by given multiplication value and creates a new array
// console.log(doubled);

// FILTER - it will only keep matching elements.
// let nums = [1,2,3,4];
// let even = nums.filter(num => num % 2 === 0);
// console.log(even);

// let nums = [1,2,3,4];
// let odd = nums.filter(num => num % 2 !== 0);
// console.log(odd);

