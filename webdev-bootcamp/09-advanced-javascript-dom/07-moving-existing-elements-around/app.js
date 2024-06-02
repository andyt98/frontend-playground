let firstParagraph = document.querySelector("p");

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = "<span>Some new text!</span>";
