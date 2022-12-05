const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passLengthValue = document.querySelector(".passLengthValue");

textInput.value = "";

passLengthValue.textContent = `${passLength.value} characters`;

passLength.oninput = function () {
  passLengthValue.textContent = `${this.value} characters`;
};

let upperLetter = Array.from("QWERTYUIOPASDFGHJKLZXCVBNM");
let lowerLetter = Array.from("qwertyuiopasdfghjklzxcvbnm");
let symbolChar = Array.from("!@#$%^&()_+=-{}][<>");
let numChar = Array.from("1234567890");

const checkboxNum = document.querySelector("#checkboxNum");
const checkboxSym = document.querySelector("#checkboxSym");
const checkboxLowLetter = document.querySelector("#checkboxLowLetter");
const checkboxUpperLetter = document.querySelector("#checkboxUpperLetter");

const copyActive = document.querySelector(".copyActive");

function removeCopyActive() {
  copyActive.style.cssText = "top: -3rem";
}

btnGenerate.addEventListener("click", () => {
  textInput.value = "";

  const availableChar = [
    ...(checkboxUpperLetter.checked ? upperLetter : []),
    ...(checkboxLowLetter.checked ? lowerLetter : []),
    ...(checkboxSym.checked ? symbolChar : []),
    ...(checkboxNum.checked ? numChar : []),
  ];

  switch (availableChar.length) {
    case 0:
      copyActive.textContent = "Error ! Please include some characters.";
      copyActive.style.cssText = "top: 2rem; background-color: red";
      setTimeout(removeCopyActive, 2000);
      textInput.value = "";
      break;
    default:
      for (let i = 0; i < passLength.value; i++) {
        // const generatePassArray = new Uint32Array(1)
        // self.crypto.getRandomValues(generatePassArray);
        // const decimal = parseFloat("0." + generatePassArray[0].toString()); // The filthiest decimalizer in existance
        const generatePass = Math.floor(Math.random() * availableChar.length);
        textInput.value += availableChar[generatePass];
      }
      break;
  }
});

const copyBtn = document.querySelector(".copyBtn");

copyBtn.addEventListener("click", async () => {
  copyActive.style.cssText = "background-color: red; top: 2rem";

  setTimeout(removeCopyActive, 2000);

  navigator.clipboard.writeText(textInput.value);

  switch (textInput.value) {
    case "":
      copyActive.textContent = "Error ! Please Generate Password.";
      copyActive.style.backgroundColor = "red";
      break;
    default:
      copyActive.textContent = "copied to clipboard!";
      copyActive.style.backgroundColor = "#2374ff";
      break;
  }
});
