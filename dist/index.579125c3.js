const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passLengthValue = document.querySelector(".passLengthValue");
const passIdentifier = document.querySelector(".passIdentifier");
let letterChar = "jklzxcvbnm1234567890qwertyuiopasdfghQWERTYUIOPASD!@#$%^&*()_+<>?FGHJKLZXCVBNM";
textInput.value = "";
passLengthValue.textContent = passLength.value;
passLength.oninput = function() {
    passLengthValue.textContent = this.value;
};
btnGenerate.addEventListener("click", ()=>{
    textInput.value = "";
    for(i = 0; i < passLength.value; i++){
        let generatePass = Math.floor(Math.random() * letterChar.length);
        textInput.value += letterChar[generatePass];
    }
    passLength.style.border = "none";
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

//# sourceMappingURL=index.579125c3.js.map
