//destructuring of oobject

const course = {
    courseName : "javascript",
    price : "1000",
    media : "online",
    tutor : "ram",
}
//console.log(course.tutor);//its lengthy and not useto

const {tutor} = course;
//console.log(tutor); //bestt
// we can also change the calling name like
const {tutor : a} = course;
//console.log(a);//gives same output
//this is known as destructuring of object

// API  --  JSON

{
    //This is known as API
    //in this both key and value are considered as strings
}
{
    "name" : "swaraj",
    "age" : "20",//this is an example
    "location" : "india",
    //sometimes api's are in array form
}
//like this
[
    {},
    {},
    {},
]