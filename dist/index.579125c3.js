const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passLengthValue = document.querySelector(".passLengthValue");
const checkboxNum = document.querySelector("#checkboxNum");
const checkboxSym = document.querySelector("#checkboxSym");
const checkboxLowLetter = document.querySelector("#checkboxLowLetter");
textInput.value = "";
passLengthValue.textContent = passLength.value + " characters";
passLength.oninput = function() {
    passLengthValue.textContent = this.value + " characters";
};
let totalRandomChar = "";
btnGenerate.addEventListener("click", ()=>{
    textInput.value = "";
    if (checkboxSym.checked && checkboxNum.checked) totalRandomChar = checkboxNum.value + checkboxSym.value + checkboxLowLetter.value;
    else if (checkboxSym.checked) totalRandomChar = checkboxSym.value + checkboxLowLetter.value;
    else if (checkboxNum.checked) totalRandomChar = checkboxNum.value + checkboxLowLetter.value;
    else {
        checkboxLowLetter.checked;
        totalRandomChar = checkboxLowLetter.value;
    }
    for(i = 0; i < passLength.value; i++){
        let generatePass = Math.floor(Math.random() * totalRandomChar.length);
        textInput.value += totalRandomChar[generatePass];
    }
});

//# sourceMappingURL=index.579125c3.js.map
