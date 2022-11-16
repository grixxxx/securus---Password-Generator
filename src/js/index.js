const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passLengthValue = document.querySelector(".passLengthValue");

const checkboxNum = document.querySelector("#checkboxNum");
const checkboxSym = document.querySelector("#checkboxSym");
const checkboxLowLetter = document.querySelector("#checkboxLowLetter");
const checkboxUpperLetter = document.querySelector("#checkboxUpperLetter");

textInput.value = "";

passLengthValue.textContent = `${passLength.value} characters`;

passLength.oninput = function () {
  passLengthValue.textContent = `${this.value} characters`;
};

let upperLetter = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
let lowerLetter = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

let symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

let numChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

btnGenerate.addEventListener("click", () => {
  textInput.value = "";

  const availableChar = [
    ...(checkboxUpperLetter.checked ? upperLetter : []),
    ...(checkboxLowLetter.checked ? lowerLetter : []),
    ...(checkboxSym.checked ? symbolChar : []),
    ...(checkboxNum.checked ? numChar : []),
  ];

  console.log(availableChar);

  for (let i = 0; i < passLength.value; i++) {
    let generatePass = Math.floor(Math.random() * availableChar.length);
    textInput.value += availableChar[generatePass];
  }
});
