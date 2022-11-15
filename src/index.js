const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passLengthValue = document.querySelector(".passLengthValue");
const passIdentifier = document.querySelector(".passIdentifier");

const checkboxNum = document.querySelector("#checkboxNum");
const checkboxSym = document.querySelector("#checkboxSym");
const checkboxLowLetter = document.querySelector("#checkboxLowLetter");

textInput.value = "";

passLengthValue.textContent = passLength.value + " characters";

passLength.oninput = function () {
  passLengthValue.textContent = this.value + " characters";
};

let totalRandomChar = "";

btnGenerate.addEventListener("click", () => {
  textInput.value = "";

  if (checkboxSym.checked && checkboxNum.checked) {
    totalRandomChar =
      checkboxNum.value + checkboxSym.value + checkboxLowLetter.value;
  } else if (checkboxSym.checked) {
    totalRandomChar = checkboxSym.value + checkboxLowLetter.value;
  } else if (checkboxNum.checked) {
    totalRandomChar = checkboxNum.value + checkboxLowLetter.value;
  } else {
    checkboxLowLetter.checked;
    totalRandomChar = checkboxLowLetter.value;
  }

  for (i = 0; i < passLength.value; i++) {
    let generatePass = Math.floor(Math.random() * totalRandomChar.length);
    textInput.value += totalRandomChar[generatePass];
  }

  passIdentifier.style.cssText += "display:block;padding: 0.5rem";

  if (passLength.value <= 11) {
    passIdentifier.textContent = "WEAK";
    passIdentifier.style.backgroundColor = "#ef233c";
  } else if (passLength.value <= 16) {
    passIdentifier.textContent = "STRONG";
    passIdentifier.style.backgroundColor = "#ffe14c";
  } else {
    passIdentifier.textContent = "VERY STRONG";
    passIdentifier.style.backgroundColor = "#74c69d";
  }
});
