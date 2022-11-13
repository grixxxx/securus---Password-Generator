const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");

let letterChar =
  "jklzxcvbnm1234567890qwertyuiopasdfghQWERTYUIOPASD!@#$%^&*()_+<>?FGHJKLZXCVBNM";

textInput.value = "";
passLength.value = "";

btnGenerate.addEventListener("click", () => {
  let passLength = document.getElementById("passLength");

  textInput.value = "";

  if (passLength.value == 0) {
    alert("Please Input Password length");
  } else if (passLength.value >= 21) {
    alert("Max Password length is 20 letters");
    passLength.value = "";
    passLength.style.cssText = "border: 2px solid red";
  } else {
    for (i = 0; i < passLength.value; i++) {
      let generatePass = Math.floor(Math.random() * letterChar.length);
      textInput.value += letterChar[generatePass];
    }
    passLength.style.border = "none";
  }
});
