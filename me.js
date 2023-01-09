const button = document.querySelector("#mebutton");
const text = document.querySelector("#mydescrip");

const texts = [
  "Dog sitter",
  "Proud Ukrainian",
  "Enthusiatic reader",
  "rookie snowboarder",
];

let index = 0;
button.addEventListener("click", () => {
  text.innerText = texts[index];
  index = (index + 1) % texts.length;
});
