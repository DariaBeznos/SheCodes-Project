const button = document.querySelector("#mebutton");
const text = document.querySelector("#mydescrip");

const texts = [
  "dog sitter",
  "proud Ukrainian",
  "enthusiatic reader",
  "rookie snowboarder",
  "coffee connoisseur",
  "F1 fan",
  "Bitcoiner",
];

let index = 0;
button.addEventListener("click", () => {
  text.innerText = texts[index];
  index = (index + 1) % texts.length;
});
