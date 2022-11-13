const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");

let letterChar =
  "jklzxcvbnm1234567890qwertyuiopasdfghQWERTYUIOPASD!@#$%^&*()_+<>?FGHJKLZXCVBNM";

textInput.value = "";

btnGenerate.addEventListener("click", () => {
  let passLength = document.getElementById("passLength");

  textInput.value = "";

  if (passLength.value == 0) {
    alert("Please Input Password length");
    textInput.style.border = "1px solid red";
  }

  for (i = 0; i < passLength.value; i++) {
    let generatePass = Math.floor(Math.random() * letterChar.length);
    textInput.value += letterChar[generatePass];
  }
});
