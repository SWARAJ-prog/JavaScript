const cars = ["mercedes" , "bmw" , "range rover" ];
// console.log(cars);
// console.log(cars[3][2]);
const superCars = ["volvo" , "tata" , "mahindra"];
// superCars.push(cars)
// console.log(superCars);
// console.log(superCars[3][1]);
//above is not a good way to do it
// const Car = superCars.concat(cars);//it's a better option that above
// console.log(Car);
// const newCars = [...cars,...superCars];

// const bikes = ["suzuki" , "active" , "kawasaki" , "yamaha" , ["hero", "ola"],["tvs","bajaj" , "ktm", ["honds" , "ather"]]];
// console.log(bikes);
// const newBike = bikes.flat(Infinity);
// console.log(newBike);

// console.log(Array.isArray("swaraj"));
// console.log(Array.from("swaraj"));
// console.log(Array.from({name : "swaraj"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;
console.log(Array.of(score1 , score2 , score3 , score4 , score5 ));//it will convert all the arguments into an array