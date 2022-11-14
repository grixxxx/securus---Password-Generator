const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
const passLength = document.getElementById("passLength");
const passIdentifier = document.querySelector(".passIdentifier");
let letterChar = "jklzxcvbnm1234567890qwertyuiopasdfghQWERTYUIOPASD!@#$%^&*()_+<>?FGHJKLZXCVBNM";
textInput.value = "";
passLength.value = "";
btnGenerate.addEventListener("click", ()=>{
    textInput.value = "";
    if (passLength.value == 0) alert("Please Input Password length");
    else if (passLength.value >= 21) {
        alert("Max Password length is 20 letters");
        passLength.value = "";
        passLength.style.cssText = "border: 2px solid red";
    } else {
        for(i = 0; i < passLength.value; i++){
            let generatePass = Math.floor(Math.random() * letterChar.length);
            textInput.value += letterChar[generatePass];
        }
        passLength.style.border = "none";
        passIdentifier.style.cssText += "display:block;padding: 0.5rem";
        if (passLength.value <= 12) {
            passIdentifier.textContent = "WEAK";
            passIdentifier.style.backgroundColor = "#ef233c";
        } else if (passLength.value <= 18) {
            passIdentifier.textContent = "STRONG";
            passIdentifier.style.backgroundColor = "#ffe14c";
        } else {
            passIdentifier.textContent = "VERY STRONG";
            passIdentifier.style.backgroundColor = "#74c69d";
        }
    }
});

//# sourceMappingURL=index.579125c3.js.map
