// let name = "swaraj"; 
// let email = 'swaraj@123';
// let age = 21;

// // console.log(name + age + email);// not prefered as not as much readble

// console.log(`hello my name is ${ name} and my age is ${ age} and my email is ${ email}`); // everywhere use this which is more readble
//                 //this is known as string interpolation

const gameName = ('swarajj')
// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('s'));// gives index of first occurence
// const newString = gameName.substring(1,7)
// console.log(newString);

// const newString2 = gameName.slice(1,7)//we can also use negative indexing in slice
// const newString3 = gameName.slice(-7,5)//we can also use negative indexing in slice
// console.log(newString2);
// console.log(newString3);

// const newString = "         Swaraj     ";
// console.log(newString);
// console.log(newString.trim());//removes extra spaces from start and end
// // trim has two typws trimStart() and trimEnd() but we use trim() in most of cases


const newString2 = "https://www.swaraj ingale.com/swaraj";
console.log(newString2);
console.log(newString2.replace(' ' , '%20'));
console.log(newString2.includes('.com'));//if yes then it returns true else false
console.log(newString2.split('/'));//splits the string into array wherever '/' is present