const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passLengthValue = document.querySelector(".passLengthValue");
textInput.value = "";
passLengthValue.textContent = `${passLength.value} characters`;
passLength.oninput = function() {
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
btnGenerate.addEventListener("click", ()=>{
    textInput.value = "";
    const availableChar = [
        ...checkboxUpperLetter.checked ? upperLetter : [],
        ...checkboxLowLetter.checked ? lowerLetter : [],
        ...checkboxSym.checked ? symbolChar : [],
        ...checkboxNum.checked ? numChar : []
    ];
    switch(availableChar.length){
        case 0:
            alert("ERROR!");
            break;
        default:
            for(let i = 0; i < passLength.value; i++){
                const generatePass = Math.floor(Math.random() * availableChar.length);
                textInput.value += availableChar[generatePass];
            }
            break;
    }
});
console.log(numChar);

//# sourceMappingURL=index.de5c0784.js.map
