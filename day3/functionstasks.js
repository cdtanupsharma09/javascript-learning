                    //JAVASCRIPT ARRAY METHODS TASK 
   //LEVEL -1
    //GREET EVERYONE
// const name = ["Aarav","diya","rohan","priya"]
//  name.forEach(function(name) {
//     console.log("Hello," + name);
// });

    //DOUBLE THE NUMBERS
// let numbers = [1,2,3,4,5];
// let newArr = numbers.map((value)=>{
//     return value*value;
// });
// console.log(newArr);


    //UPPERCASE ALL NAMES
// const name=["aarav","rohan","diya"];
// let newarr = name.map ((Value)=>{
// console.log(Value.toUpperCase());
// } );

   //LEVEL--2
//ONLY EVEN NUMBERS  
// const number =[10, 15, 22, 33, 44, 55, 60];
// const evenArr = number.filter((value)=>{
// return value % 2===0;
// }
// );
// console.log(evenArr);

    //FIND THE FIRST ADULT
// const ages =[12,15,17,19,21,25];
 // const output = ages.find((x) => x > 18);
 // console.log(output);

    //FILTER LONG WORDS
// const word = ["cat","elephant","dog","rhinoceros","ant","tiger"];
// const longword = word.filter(value => value.length > 4 );
//  console.log(longword);

    //SUM ALL NUMBERS
// const prices =[199,299,99,499,150];
// const output =prices.reduce( (previous ,current ) => {
// return previous+current;
// });
// console.log(output);

    //LARGEST NUMBER
// const scores=[45,78,23,99,67,88];
// const output = scores.reduce ((previous , current)=>{
// return previous > current ? previous : current ;
// });
// console.log(output);

//MAP+FILTER COMBO
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const result = nums.map(x => x * x);
nums.filter(x => x > 20);
console.log(result);

