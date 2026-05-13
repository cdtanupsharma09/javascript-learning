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
function sum(a, b){
   return a+b;
}
const arrowsum = (a, b)=>{
console.log(a+b);
};


//multiplication using arrow function
function mul(a, b){
   return a*b;
}
const arrowmul = (a, b)=>{
   console.log(a*b);
};



