//function is a block of code assignd to perform a paricular task in javascript.
//function is used to keep logic seperate
//if you want to do any work where you need to do the changes again and again then you can use or call functions
//  with help of function you have to change only once.
//parameter

function oneplusavg(x ,y){
    console.log("done")
    return 1 + (x + y)/2
    }
 // arrow function
 const sum = (p,q)=> {
    return p + q
 }
let a = 1;
let b = 2;
let c = 3;

console.log("one plus average of a and b is ", oneplusavg(a, b))
console.log("one plus average of b and c is ", oneplusavg(b, c))
console.log("one plus average of a and c is ", oneplusavg(a, c))
console.log(sum(9,7));
