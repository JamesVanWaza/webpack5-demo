// import getClasses from './getClasses';

// console.log('ran from index.js');
// getClasses();

// const obj = {
//     a: 'alpha',
//     b: 'bravo',
// };

// const newObj = {
//     ...obj,
//     c: 'charlie'
// };

// console.log(newObj);

/** Stylesheet **/
import '../scss/style.scss';

/** FontAwesome 6 */
import '@fortawesome/fontawesome-free/js/all.js';

// const headline = "Welcome to the webpage";
// document.querySelector('h1').innerText = headline;

// import mainImg from '../images/trees.jpeg';
// img.src = mainImg;

/** Footer */
document.body.onload = footer;

function footer() {
    // create a new div element
    const footerDiv = document.createElement("footer");

    // assign it a class
    footerDiv.classList.add("footer");

    // gets the current date
    const copyright = new Date().getFullYear();

    // gets the copyright symbol
    const favicon = document.createElement("i");
    favicon.classList.add("fas", "fa-copyright");

    const text = document.createTextNode(" 2020 " + "- " + copyright);

    // add the text node to the newly created div
    footerDiv.appendChild(favicon);
    footerDiv.appendChild(text);

    // add the newly created element and its content into the DOM
    const newDiv = document.getElementById("div");
    document.body.insertBefore(footerDiv, newDiv);
}