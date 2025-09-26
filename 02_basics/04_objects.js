//constructor

const infouser = new Object();
// console.log(infouser)

infouser.id = "swaraj.com";
infouser.name = "A";
infouser.age = 21;
infouser.location = "nagpur";
// console.log(infouser)

const nomUser = {
    mail : "@gmail.com",
    user : {
        userName : {
            firstName : "ram",
            lastName : "abc",
            age : 15,
        },
        location : "nagpur",
    }
}
// console.log(nomUser);
// console.log(`my age is ${nomUser.age}`);
// console.log(nomUser.user);
// console.log(nomUser.user.userName.age);


const obj = {1: "a" , 2: "b" , 3: "c"}
const obj1 = {4: "d" , 5: "e"}
//const obj0 = {obj , obj1}//not preferred coz it merges objects with brackets
// same problem in arrays
const obj0 = Object.assign(obj , obj1);
const obj01 = Object.assign({} , obj , obj1);
// console.log(obj0);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
// console.log(obj01);//output is exact same like above but most preferred

//most used and predered than above that is spread operators
const obja = {...obj , ...obj1};//simple and easy to understand
// console.log(obja);

//for values from database
const users = [
    {
        id: 19,
        email: "gmail.com",
    },
    {
        id: 13,
        email: "gmail.com"
    },
    {
        id: 44,
        email: "gmail.com"
    },
    {
        id: 8,
        email: "gmail.com"
    },
]
console.log(users[2].id);//gets particular value by indexing(arrays)
console.log(Object.values(infouser));//prints the assigned values
console.log(Object.keys(infouser));//prints the keys