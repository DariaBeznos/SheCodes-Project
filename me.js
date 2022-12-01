function changetext() {
  let myinterest = document.querySelector("#myinterests");
  let textreplace = myinterest.text();
  let newtext = textreplace.replace("Hi", "Bye");
  myinterest.text(newtext);
}

document.querySelector("#mebutton").addEventListener("click", changetext);
