// console.log("S");
// console.log("W");
// console.log("A");
// console.log("R");
// console.log("A");
// console.log("J");//absolutely not prefered

const user = function(){
    console.log("S");
    console.log("A");
    console.log("W");
    console.log("A");
    console.log("R");
    console.log("J");
}
//user()

function addOfTwoNum(a,b){//in this a , b are parameters
    console.log(a+b);
}
// addOfTwoNum(4,3)//7       // in this a,b are arguments
// addOfTwoNum(4,"3")//43
// addOfTwoNum(4,"a")//4a
// addOfTwoNum(4,null)//4

const add = function(a,b,c,d){
    console.log(a+b+c+d);
}
const sub = function(a,b,c,d){
    console.log(a-b-c-d)
}
// console.log(`The sum of all numbers is : ${add(2,4,3,9)}`)
// console.log(`The difference of all numbers is : ${sub(15,2,8,1)}`)


function product(a,b){
    // let result = a * b;
    // console.log("CALCULATING PRODUCT ...");//can print anything before return
    return a * b//abother easiest way
    // return result;   
    console.log("HI");//nothing can be printed after return
}
const result = product(5,5);
// console.log("PRODUCT OF GIVEN NUMBERS IS : ",result);
//from line 36-41 is the best and easy way to call and return functions


function loginUserMessage(name){
    if(name === undefined){
        console.log("please enter name !");
        return 
    }
    return `${name} just logged in`
}
//loginUserMessage("swaraj");//doesn't print anything
// console.log(loginUserMessage());//if no parameter it prints undefined

//another method
function sample(user = "swaraj"){//the name can be given like this either in the form shown above
    if(!user){
        console.log("enter valid name");
        return
    }
    return `${user} is just logged in` ;
}
// console.log(sample())

//shopping cart problem

function calculationCartItem(...item1){//... this is spread operator and also rest operator but 
                                        // where it is known as rest and where spread that depends and we will learn next
    return item1;
}
// console.log(calculationCartItem(5,16,90,54,23))//gives in array format

function calculationCartItem1(item01 , item02 , ...item){
    return item
}
//console.log(calculationCartItem1(100 , 290 , 432 , 540 , 700))
//in this case 100 is assigned to item01 and 290 to item01 and rest as spread operator which are assigned to 

const user1 = {
    name : "raj",
    age : 25,
    thing : "biscuits",
    price : 500
}
function handleObject(anyobject){
    console.log(`${anyobject.thing} and the price is ${anyobject.price}`)
}
// handleObject(user1)
// //handleObject({
//     thing : "shoes",
//     price : 1200,
// //})


const newArray = [1,2,3,4,5,6,7,8]
function returnArray(getArray){
    return getArray[4]
}
console.log(returnArray(newArray))