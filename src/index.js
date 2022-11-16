const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passLengthValue = document.querySelector(".passLengthValue");


const checkboxNum = document.querySelector("#checkboxNum");
const checkboxSym = document.querySelector("#checkboxSym");
const checkboxLowLetter = document.querySelector("#checkboxLowLetter");
const checkboxUpperLetter = document.querySelector("#checkboxUpperLetter");

textInput.value = "";

passLengthValue.textContent = passLength.value + " characters";

passLength.oninput = function () {
  passLengthValue.textContent = this.value + " characters";
};

let totalRandomChar = "";

btnGenerate.addEventListener("click", () => {
  textInput.value = "";

  if(checkboxUpperLetter.checked && checkboxSym.checked && checkboxNum.checked)
  {
    console.log(true);
   totalRandomChar =checkboxSym.value + checkboxUpperLetter.value + checkboxNum.value;
  }
  else if(checkboxUpperLetter.checked && checkboxSym.checked)
   {
    totalRandomChar =checkboxSym.value + checkboxUpperLetter.value;
   }
  else if (checkboxSym.checked && checkboxNum.checked) {
    totalRandomChar =
      checkboxNum.value + checkboxSym.value + checkboxLowLetter.value;
  } 
   else if(checkboxUpperLetter.checked && checkboxSym.checked && checkboxNum.checked)
   {
    totalRandomChar =checkboxSym.value + checkboxUpperLetter.value + checkboxNum.value;
   }
   else if (checkboxUpperLetter.checked && checkboxNum.checked) {
    totalRandomChar =checkboxNum.value + checkboxUpperLetter.value;
  }
  else if (checkboxSym.checked) {
    totalRandomChar = checkboxSym.value + checkboxLowLetter.value;
  } else if (checkboxNum.checked) {
    totalRandomChar = checkboxNum.value + checkboxLowLetter.value;
  }
  else if (checkboxUpperLetter.checked) {
    totalRandomChar =checkboxUpperLetter.value;
  }
  else {
    checkboxLowLetter.checked;
    totalRandomChar = checkboxLowLetter.value;
  }

  for (i = 0; i < passLength.value; i++) {
    let generatePass = Math.floor(Math.random() * totalRandomChar.length);
    textInput.value += totalRandomChar[generatePass];
  }
});
