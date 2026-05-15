//function is a block of code assignd to perform a paricular task in javascript.
//function is used to keep logic seperate
//if you want to do any work where you need to do the changes again and again then you can use or call functions
//  with help of function you have to change only once.
//parameter 

// FUNCTIONS --- block of code that perform a specific task , can be called whenever needed.

// function mydetails(){ 
// console.log("my name is anup sharma.");
// console.log("age = 21.");
// console.log("i am learning functions.");
// }
// mydetails();
// mydetails();

// function mydetails(msg) { //parameters are input used in function.
//    //variable used in function defination is known as parameter.
// console.log(msg);
// }
// mydetails("my name is anup sharma");// the value we pass in function call is arguement.
//paramenters are like local variable of function whose scope is upto block of function

//SUM FUNCTIONS
// function sum(x, y){
// sum = x + y;
// return sum;
// console.log("after return");//we cannot write or execute any statement after return.
// }
// let value = sum(3,4);
// console.log(value);

//ARROW FUNCTION (WAY OF WRITING FUNCTION IN SHORT FORM ) =>

   //sum using arrow function
// function sum(a, b){
//    return a+b;
// }
// const arrowsum = (a, b)=>{
// console.log(a+b);
// };

// //arrow functon is part of modern day java script.

// //multiplication using arrow function
// function mul(a, b){
//    return a*b;
// }
// const arrowmul = (a, b)=>{
//    console.log(a*b);
// };

// const printhello = () => {
// console.log("hello");

// };


// QUESTION -- create a function using the "function keyword that takes a string as an arguement & returns the number of vowels in the string".
// function countvowels(str) {
//    let count =0;
//    for(const char of str) {
//       if (
//          char === "a"||
//          char === "e"||
//          char === "i"||
//          char === "o"||
//          char === "u"
//       ){
// count++;
//       }
//    }
//    return count;
// }

// const countvowel = (str) => {

//    let count = 0;
//    for(const char of str) {
//       if (
//          char === "a"||
//          char === "e"||
//          char === "i"||
//          char === "o"||
//          char === "u"
//       ) {
// count++;
//       }
//    } 
// return count ; 
// };

// FOR EACH LOOP IN ARRAYS FUNCTION.
// FOR EACH IS A METHOD IN ARRAY FUNCTION.
// INSIDE JAVASCRIPT FUNCTIONS CAN BE PASSED LIKE A PARAMETER
// a function which can pass anathor function like an arguement is known as callback function.

// function abc(){
// console.log("hello");
// }
// function myfunc(abc) {
// return abc;
// };

// let arr = [1,2,3,4,5];
// arr.forEach(function printvalue(value){
// console.log(value);
// });

// let arr = ["gangtok","sikkim","delhi","pakisthan"];

// arr.forEach((value)=>{
// console.log(value.toUpperCase());
//});//EXAMPLE OF CALLBACK

// let arr = ["gangtok","sikkim","delhi","pakisthan"];

// arr.forEach((value, index)=>{
// console.log(value.toUpperCase(), index);
// });
// idx = index define position of an element.
//foreach method / function is higher order function or callback function is a higher order function in javascript

// QUESTION TO SOLVE
// FOR A GIVEN ARAY OF NUMBERS, PRINT THE SQUARE OF EACH VALUE USING THE ForEach LOOP.

// let nums = [2,3,4,5,6,7];
// nums.forEach((num) => {
// console.log(num*num);//nums**2 -- we can use this to get expected output.
// });

// MAP METHOD
// CREATES A NEW ARRAY WITH THE RESULTS OF SOME OPERATION.THE VALUE ITS CALLBACK RETURNS ARE USED TO FORM NEW ARRAY
//  let nums =[67,52,39];
//  let newArr = nums.map((value)=>{
//    return value*value;
//  } );
//  console.log(newArr);


// FILTER METHOD IN AN ARRAY FUNCTION -- filter out as per the condition.
// let arr =[1,2,3,4,5,6,7,8,9];
// let evenArr = arr.filter((val) => {
//    return val % 2 !== 0; //  ===to get even output and !== to get odd output.
// });
// console.log(evenArr);
//FILTER LONG WORDS
// const word = ["cat","elephant","dog","rhinoceros","ant","tiger"];
// const longword = word.filter(value => value.length > 4 );
//  console.log(longword);

//REDUCE METHOD-- perform some operations and reduces the array to a single value. it returns that single value.
// let arr =[1,2,3,4,5,6,7];
// let output = arr.reduce((result , current)=> {
// return result + current;
// });
// console.log(output);

//to get output a largest number using reduce method
// let arr =[1,2,3,4,5,6,7,303,6679];
// let output = arr.reduce((result , current)=> {
// return result > current ? result : current;//it is the conditon to get largest output.
// });
// console.log(output);

//FIND METHOD -- it is used to checks each item in an array and gives back the first matching item.
// let marks =[12,22,34,45,67,89,92];
// let result = marks.find((num) => num > 80);
// console.log(result);

//SORT ARRAY METHOD
// let alphabet = ["g","h","f","b","d","a","e","c"];
// console.log(alphabet);
// alphabet.sort();
// console.log(alphabet); 

