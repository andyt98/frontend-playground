let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clicked!");
  console.log("Event " + event);
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  console.log("Event " + event);
  console.log(event.data);
  console.log(event.target.value);
}

inputElement.addEventListener("input", retrieveUserInput);
