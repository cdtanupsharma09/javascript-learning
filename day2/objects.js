//object is a container that stores related data and functionality together.
//let person={};
//console.log(person);

//{}means empty object
//javascript create an container in memory

let person2 ={};
person2.name='anup';
person2.age =21;
console.log (person2);
//in this way we can add properties to the object
//we can also add properties to the object using the dot notation

person2.name='abcd';
person2.age =22;
console.log (person2);  
//we can add/store funtions too in objects
 //function is set of instructions that runs when you call it.
let person ={
    name:'anup',
    age:21,
    greet: function(){
        console.log("Hello "  + this.name);
    }
};
const myage = person.age
console.log(myage)
person.greet();