//array

// let arr = [1,2,3,4,5,true,"swaraj",null,undefined];//in js array are resizable and can contain different data types
// console.log(arr);
// console.log(arr[3]);

// let arr2 = new Array(1,2,3,4,5);
// console.log(arr2 , arr2[1]);


// array methods

// arr.push(6 , 7);
// arr.pop();// removes last element
// console.log(arr);// adds element at the end

// arr.unshift('hi');// adds element at the beginning
// console.log(arr);
// arr.shift();// removes first element
// console.log(arr);

// console.log(arr.includes(null));// gives true or false
// console.log(arr.indexOf(null));// gives index of the element

// const newArr = arr.join();
// console.log(arr);
// console.log(typeof newArr);

// arr.reverse();
// console.log(arr);

let arr = [1,2,3,4,5,true,"swaraj",null,undefined];
console.log("A" , "-", arr);
const arr0 = arr.slice(2,6);
console.log("B" , "-" , arr0);
const arr1 = arr.splice(2,4);//
console.log("C" , "-" , arr1);