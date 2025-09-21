
let score = 33;
let score1 = "33abcd";
let score2 = null;
let score3 = undefined;
let score4 = true;//if false then output will be 0
console.log(typeof score,score1);
console.log(typeof score2,score2);
console.log(typeof score3,score3);
console.log(typeof score4,score4);  

let vlueInNumber = Number(score1);//it converts string to number whatever in double quotes
console.log(vlueInNumber, typeof vlueInNumber);//output: NaN 'number' because it is not a pure number

let isLoggedIn = 0;//it converts number to boolean
//if isLoggedIn = "" then output will be false
//if isLoggedIn = "swaraj" then output will be true
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);//output: true 'boolean'

let Num = 99;
let strNum = String(Num);
console.log(strNum , typeof strNum);