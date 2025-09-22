//Memory
//2 types of memory
//1. Stack Memory => used in primitive data types
//2. Heap Memory => used in reference data types(non-primitive datatypes)

// let myName = "raj";
// let anotherName = myName;
// anotherName = "ram";
// console.log(myName);
// console.log(anotherName);

let userOne = {
    name : "swaraj",
    age : 21,
    weight : 50,
};
let userTwo = userOne;
userTwo.age = 20;
console.log(userOne);
console.log(userTwo);//both will show age 20 because both are pointing to same memory location in heap memory
