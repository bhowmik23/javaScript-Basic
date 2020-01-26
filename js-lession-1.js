console.time('your code took');
// alert('hello');
console.log('hello world');
console.timeEnd('your code took');
// console.clear();
// console.error('this is an error');
console.log({harry: 'this', marks: 34});

// var name = 'harry';
// var channel;
// var marks = 3454;
// marks = 0;
// channel = 'CodeWithHarry'
// console.log(name, channel, marks);


// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);

const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
// arr1.push(45);
console.log(arr1)

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 
*/
// Primitive data types

// String
let name = "harry";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

function findName() {
    
}
console.log( typeof findName);

let date = new Date();
console.log( typeof date);


// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date1 = String(new Date());
console.log(date1, (typeof date1));

let arr =  String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString());

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);



// properties, methods, Templete


console.log('We are at tut 6');
const name1 = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name1);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);


console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(0, 4))
console.log(html.split('>'));
console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name1}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml; 


console.log('We are in tut7.js and lets discuss about arrays');
let marks1 = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr2 = new Array(23,123,21, 'Orange');
console.log(marks1);
console.log(mixed);
console.log(fruits[1]);

console.log(arr2.length);
console.log(Array.isArray('dfdf'));
arr2[0] = 'harry';
let arrelement = arr2[0];
console.log('element :', arrelement);
console.log(arr2);

let value = marks1.indexOf(73);
console.log(value);

// Mutating or Modifying arrays
marks1.push(3564);
marks1.unshift(1009);
marks1.pop()
marks1.shift()
marks1.splice(2, 3);
marks1.reverse()
console.log(marks1);
let marks2 = [1, 2,3, 7]
marks3= marks2.concat(marks2);
console.log(marks3);

let myobj = {
    'first name': 'Biddut', 
    channel: 'CodeWithBiddut',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)

// if else condition & switch

console.log('if else & switch condition');
const age = 128;
const doesDrive = false;
const vari = 34;

if (age!=19){
    console.log('Age is not 19')
}

if(age !== 65){
    console.log('Age is not 65')
}

else{
    console.log('Age is not 19')
}

if (typeof vari !== 'undefined'){
    console.log('Vari is defined');
}

else{
    console.log('Vari is not defined');
}

if (doesDrive== true  && age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

console.log(age==45? 'Age is 45': 'Age is not 45');

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 128:
        console.log("You are 128");
        break;

    default:
        console.log("You are unknown age");
        break;
}   

// for while & do while

console.log("or while & do while");
console.log(1)
console.log(2)
console.log(3)

// General Loops: for, while, do-while
let a =34;
a +=1;
a++;
console.log(a);
for(let i=0; i<100;i++){
    console.log(i);
}

let j = 110;
while (j < 10) {
  console.log(j + 1);
  j += 1;
}

let k = 0;
do {
    if(k===5){
        k +=1;
        continue;
    }
  console.log(k + 1);
  k +=1;
} while (k < 10);

let arr3 = [2,5,6,4,2,3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

arr3.forEach(function(element, index, array){
    console.log(element, index, array);
});

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}

console.log('done');


// function

console.log('function');

if(1){
    let i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)
const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name3 = 'SkillF';
let name2 ='Rohan';

let val = mygreet(name3, 'Thanks a lot');
console.log(val);


const myobj1 = {
    name3: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj1.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
}); 

// Manipulating website using js


// console.log('Manipulating website using js');
// let a1 = window.document;
// alert('hello harry');
// a1 = prompt('This will destroy your computer. Type your name');

// a1 = confirm('Are you sure you want to delete this page?');
// a = window.innerHeight;
// a = innerWidth;
// a = scrollY;
// a = location.toString();
// a = window.history;
// console.log(a);          

 console.log("Welcome to tutorial number 23");
let x = 3;
let y = 6;
let z;
z = x+y;
z = x-y;
z = x*y;
z = x/y;

// Exploring the Math object
z = Math;
z = Math.PI;
console.log(z);
z = Math.E;
console.log(z);
z = Math.round(5.2);
console.log(z);
z = Math.ceil(5.3);
console.log(z);
z = Math.floor(-5.3);
console.log(z);
z = Math.abs(5);
console.log(z);
z = Math.sqrt(64);
console.log(z);
z = Math.pow(2, 3);
console.log(z);
z = Math.min(2, 3, 34,234, 2342,34);
console.log(z);
z = Math.max(2, 3, 34,234,34);
console.log(z);
z = Math.random();
console.log(z);
z = 100*Math.random()
console.log(z);
z = Math.ceil(50 + (100-50)*Math.random());
console.log(z);
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)

// console.log(z);

// 3
// 2.8
// 2
// 1
// 0
// -1
// -2
// -2.7
// -3

console.log("Welcome to tutorial 24");

let today = new Date();
// console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);
let A;
A = otherDate.getDay();
console.log(A);
A = otherDate.getDate();
console.log(A);
A = otherDate.getMinutes();
console.log(A);
// a = otherDate.getSeconds();
// a = otherDate.getHours();
A = otherDate.getTime();
console.log(A);
A = otherDate.getMilliseconds();
A = otherDate.getMonth();
console.log(A);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);



console.log("This is tut 27");

// Object Literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function() {
    console.log("car is running");
  }
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function() {
    console.log(`${this.name} Is Running`);
  };
  this.analyze = function() {
    console.log(
      `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);

 
 
 


           


