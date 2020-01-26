// console.log('Welcome to tut 12.js');
// let a = document;
// a = document.all;
// // a = document.body;
// // a = document.forms[0];
// // Array.from(a).forEach(function(element){
// //     console.log(element);
// // })
// a = document.links[0];
// // use document.images and document.scripts and print the list of images and scripts on an html page
// console.log(a);



// console.log('Welcome to tutorial 14');
// /*
// element selectors:
// 1. Single element selector
// 2. Multi element selector

// */

// // 1. Single element selector
// // let element = document.getElementById('myfirst');
// // // element = element.className;
// // // element = element.childNodes;
// // // element = element.parentNode;
// // element.style.color = 'red';
// // element.innerText = 'Harry is a good boy';
// // element.innerHTML = '<b>Biddut is a good boy</b>';
// // console.log(element.innerText);


// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel)

// // 2. Multi element selector
// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
// console.log(elems)

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
// //    element.style.color = 'blue'; 
// }
// // Array.from(elems).forEach(element => {
// //     console.log(element);
// //    element.style.color = 'blue'; 
// // });
// // console.log(elems[0].getElementsByClassName('child'));




// let cont = document.querySelector('.no');
// cont.style.color = 'red'; 
// cont = document.querySelector('.container');
// let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;
// // console.log(nodeName);
// // console.log(nodeType)
// // Node types
// // 1. Element
// // 2. Attribute
// // 3. Text Node
// // 8. Comment
// // 9. document
// // 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

// let container = document.querySelector('div.container');

// // console.log(container.children[1].children[0].children);

// // console.log(container.firstChild);
// // console.log(container.firstElementChild);

// // console.log(container.lastChild);
// // console.log(container.lastElementChild);
// // console.log(container.children);
// // console.log(container.childElementCount); // Count of child elements

// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);


// console.log('this is tut 16');
// let element = document.createElement('li');
// let text = document.createTextNode('I am a text node');
// element.appendChild(text)

// // Add a class name to the li element
// element.className = 'childul';
// element.id = 'createdLi';
// element.setAttribute('title', 'mytitle');
// // element.innerText = '<b>Hello this is created by harry</b>';
// // element.innerHTML = '<b>Hello this is created by harry</b>';

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);
// // console.log(ul)
// // console.log(element)

// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('This is a created node for elem2');
// elem2.appendChild(tnode);

// element.replaceWith(elem2);
// let myul = document.getElementById('myul');
// // myul.replaceChild(element, document.getElementById('fui'));
// // myul.removeChild(document.getElementById('lui'));
// // let pr = elem2.hasAttribute('href');
// // elem2.removeAttribute('id');
// // elem2.setAttribute('title', 'myelem2title');
// // console.log(elem2, pr);

// // quick quiz
// // create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"


// console.log("This is tutorial 17 on events");

// document.getElementById("heading").addEventListener("click", function(e) {
//   let variable;
//   console.log("You have clicked the heading");
//   variable = e.target;
//   variable = e.target.className;
//   variable = Array.from(e.target.classList);

//   variable = e.target.id;
//   variable = e.offsetX;
//   variable = e.offsetY;
//   variable = e.clientX;
//   variable = e.clientY;
//   console.log(variable);
//   // location.href = '//codewithharry.com'
// });


// console.log('This is tut 18');
// // let btn = document.getElementById('btn');
// // btn.addEventListener('click', func1);
// // // btn.addEventListener('mousedown', func3);
// // btn.addEventListener('dblclick', func2);

// // function func1(e) {
// //     console.log("Thanks", e);
// //     e.preventDefault();
// // }

// // function func2(e) {
// //     console.log("Thanks its a double click", e);
// //     e.preventDefault();
// // }

// // function func3(e) {
// //     console.log("Thanks its a mouse down ", e);
// //     e.preventDefault();
// // }
// // document.querySelector('.no').addEventListener('mouseenter', function(){


// //     console.log('You entered no')
// // })

// // document.querySelector('.no').addEventListener('mouseleave', function(){
// //     console.log('You exited no')
// // })

// document.querySelector('.container').addEventListener('mousemove', function(e){
//     // console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},234)`;
//     // console.log('You triggered mouse move event');
// });

// let str = "python";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element) {
//   href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });

// console.log('This is tut 20');
// let impArray = ['adrak', 'pyaz', 'bhindi'];

// // // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', JSON.stringify(impArray));

// // Clears the entire local storage
// // localStorage.clear();

// // Clear a particular key-value pair
// localStorage.removeItem('Name2');

// // Retrieve an item from the local Storage
// let name4 = localStorage.getItem('Name');
// name4 = JSON.parse(localStorage.getItem('Sabzi'));
// console.log(name4);

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));



console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first)

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

 
