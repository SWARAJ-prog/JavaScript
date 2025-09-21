//****************************CONVERSIONS**************************/
// let score = 33;
// let score1 = "33abcd";
// let score2 = null;
// let score3 = undefined;
// let score4 = true;//if false then output will be 0
// console.log(typeof score,score1);
// console.log(typeof score2,score2);
// console.log(typeof score3,score3);
// console.log(typeof score4,score4);  

// let vlueInNumber = Number(score1);//it converts string to number whatever in double quotes
// console.log(vlueInNumber, typeof vlueInNumber);//output: NaN 'number' because it is not a pure number

// let isLoggedIn = 0;//it converts number to boolean
// //if isLoggedIn = "" then output will be false
// //if isLoggedIn = "swaraj" then output will be true
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);//output: true 'boolean'

// let Num = 99;
// let strNum = String(Num);
//console.log(strNum , typeof strNum);

//****************************OPERATIONS**************************/

// let num = 9;
// let negNum = -num;
// //console.log(negNum);//output: -9    

// // console.log(5 + 5);//output: 55 because it is a string
// // console.log(5 - 5);
// // console.log(5 / 5);
// // console.log(5 * 5);
// // console.log(5 ** 2);
// // console.log(5 % 2);

// let str1 = "happy";
// str2 = " birthday";
// console.log(str1 - str2);//output is NaN because - operator is not defined for string
// console.log(str1 + str2);//output is happy birthday because + operator is defined for string
// console.log(str1 * str2);//output is NaN because * operator is not defined for string

// console.log(5 +"2");//output is 52 coz 5 is num and "2" is string
// console.log("1" + 2 + 2);//output is 122 coz "1" is string and 2 is num
// console.log(1 + 2 + "2");//output is 32 coz 1 and 2 are num and "2" is string


// console.log( + true);
// console.log( + false);
// console.log( + "");//it converts string to number whatever in double quotes  not prefered

let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);//output: 101
// ++ gameCounter;
-- gameCounter;
console.log(gameCounter);//output: 100