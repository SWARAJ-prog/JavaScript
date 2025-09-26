//if object is made from constructor then it will be singleton

// object literal
const mySymbol = Symbol("a");
const user = {
    name : "swaraj",
    age : 20,
    email : "swaraj.com",
    location : "nagpur",
    isLoggedIn : true,
    [mySymbol] : "b",
};
// // //imp quetion for interview that print symbol in object
// // console.log(user);
// // console.log(user.name);//it is not suitable to print
// // console.log(user["age"]);
// // console.log(user.mySymbol);//but it will be printed with datatype string as we need symbol
// // console.log(typeof user.mySymbol);//it will give string
// // if we want to print with datatype symbol use the square bracket notation

// console.log(typeof user[mySymbol] , user[mySymbol]);// it will give symbol datatype

user.greeting = function(){
    console.log("learning javascript");
}
user.greeting1 = function(){
    console.log(`hello ${user.name}`);
}
console.log(user.greeting(),user.greeting1());//it will give undefined