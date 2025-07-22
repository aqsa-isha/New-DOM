// DOM: Document Object Model
// The Musketeeers of Web development
// HTML, CSS, JS

// <style> tag connects with html
// <script> tag connents with css

alert("Hello")

console.log("Hello from JS");
// JS-> readability, modular divide into multiple files
// Browser Caching: reload with changes


// Window Object: The window object represents an open window 
// in a browser. It is browser's object not javaScripts & is automatically created by browser.
// Is it a global object with a llot of properties and methods.
// window object is a global object with a lot of properties and methods.
// The window object represents an open window in a browser.

// window
console.log(window)

document.write(window)


window.console.log("hello")
window.alert("Hello from window")



// DOM: When a web page is loaded, the browser creates a 
//  Document Object model (DOM) of the page.

// HTML -> we can access html in js
// html element -> js(object) -> document

// window.document
console.log(window.document)


console.log(document.body)

// To access html in JS is called DOM.
// DOM: How the browser understands it
console.dir(document.body)


console.log(document.head)

console.dir(document.body.childNodes[2])


// dynamically we can make changes

// document.body.style.background="green"
// document.body.childNodes[3].innerText = "Abcsd"



// dynamic changes or dynamic manipulation: DOM



// DOM Manipulation:
// Selecting with id   
// document.getElementbyId("myId")

// Selecting with class
// document.getElementByclassName("myClass")

// // Selecting with tag
// document.getElementByTagName('properties')




// Dom Manipulation
// Query Selector   
// document.querySelector("myId/myClass/tag")
// returns first element


// document.querySelectorAll("myId/myClass/tag")
// returns a nodelist


let first_element = document.querySelector("p")
console.dir(first_element)
first_element.textContent = "My para changed"



let all_elements = document.querySelectorAll("p")
console.dir(all_elements)
// all_elements[1].textContent = "Hello from DOM Manipulation"

// for (let i = 0; i<= all_elements.length; i++) {
//   all_elements[i].textContent = "Helloooo"
// }

// for (let i = 0; i<= all_elements.length; i++) {
//   all_elements[i].innerHTML = "<b>Hello from DOM manipulation</b>"
// }



// DOM Properties
// tagName: return tag for elementy nodes  //button#myid   //div_element.tagName
// textContent: returns a textual content even for hidden elements
// innerText: returns the text content of the elements and all its children
// document.body.querySelector("div").children;
// innerHTML; return the plain text or HTML contents in the elements

let div_element = document.querySelector("#mydiv")
div_element.textContent = "my new div changed"




