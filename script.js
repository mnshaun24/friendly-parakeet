// Assignment code here
window.alert("Hello. Welcome to The World's Most Difficult Password Generator. First, pick your variables. Then, click generate password.")

function generatePassword() {
  console.log("Button clicked!")

  //when generatePassword runs, passInfo calls the other functions.
  var passInfo = {
    length: passLength(),
    characterCase: passCharacters()
  }

  console.log(passInfo)

  return "batman"
}

// function to ask about password length
var passLength = function() {
  var length = "";
  var promptLength = window.prompt('How many characters do you wish your password to be? Please enter a value between "8" and "128".');

  // validate prompt answer
  if (promptLength === "" || promptLength === null) {
    window.alert("You must enter a valid criterion. Try again.");
    // return call again and prevent rest of function from running
    return passLength();
  }

  if (promptLength < 8 || promptLength > 128) {
    window.alert("You have chosen an invalid password length. Please choose a valid length.");
    return passLength();
  }

  console.log("You have chosen " + promptLength + " characters.")

  return length;
}

var passCharacters = function() {
  var characterCase = "";
  var promptCase = window.prompt("What cases would you like to use? Choose 'upper', 'lower', or 'both'?")

  // validate prompt answer
  if (promptCase === "" || promptCase === null) {
    window.alert("You must enter a valid criterion. Try again.");
    return passCharacters();
  }
  // convert to lower case
  promptCase = promptCase.toLowerCase();
  console.log("promptCase is ", promptCase)

  return passCharacters;

}

// the following functions are from JavaScript Password Generator, uploaded Oct 21, 2019 at https://www.youtube.com/watch?v=duNmhKgtcsI

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumb() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymb() {
  const symbols = "!@#$%^&*{}[]<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);