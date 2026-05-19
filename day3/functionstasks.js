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
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = nums.map(x => x * x);
// nums.filter(x => x > 20);
// console.log(result);

// LEVEL--4 __REAL-WORLD PROBLEMS
// STUDENT REPORT CARD
// let student = [
//     { name: "aarav", marks: [85, 78, 92] },
//     { name: "diya", marks: [45, 52, 60] },
//     { name: "rohan", marks: [70, 75, 80] },
//     { name: "priya", marks: [90, 95, 88] }
//   ];
  
// let result = student
// student.map(student =>({
// name: student.name,
// total: student.marks.reduce((previous, current) => previous + current)
// }))
// student.filter(student => student.total / 3 > 70)
// student.find(student => student.name.startsWith('p'));
// console.log(result);

//SHOPPING CART TOTAL
// const cart = [
//      { item: "Pen",   price: 20, qty: 3 },
//     { item: "Book",  price: 150, qty: 2 },
//      { item: "Eraser",price: 10, qty: 5 },
//     { item: "Bag",   price: 800, qty: 1 }
//   ];
//   const total = cart.reduce((total, items) => {
//     return total + (items.price * items.qty);
//   },0);
//   console.log(total);
 
  const sentence ="the quick brown fox jumps over the lazy dog the fox ";
  