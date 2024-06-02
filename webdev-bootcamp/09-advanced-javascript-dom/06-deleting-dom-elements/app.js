// REMOVE ELEMENTS
// 1. Select the element that should be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers
