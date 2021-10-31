// Assignment code here
window.alert("Hello. Welcome to The World's Most Difficult Password Generator. First, pick your variables. Then, click generate password.")

function generatePassword() {

  // set of required parameters as determined by user
  var makePassword = []

  // function to select an index from the array
  function getIndex(anything) {
    return Math.floor(Math.random() * anything)
  };

  //when generatePassword runs, passInfo calls the other functions.
  var passInfo = {
    passwordLength: passLength(),
    lower: passLower(),
    upper: passUpper(),
    number: passNumb(),
    special: passSpec(),
  };

  console.log(passInfo)

  // ifs to include parameters selected by user

  if(passInfo.lower) {
    makePassword.push(randomLower())
  }

  if(passInfo.upper) {
    makePassword.push(randomUpper())
  }

  if(passInfo.number) {
    makePassword.push(randomNumb())
  }

  if(passInfo.special) {
    makePassword.push(randomSymb())
  }

  if(passInfo.lower === false && passInfo.upper === false && passInfo.number === false && passInfo.special === false) {
    window.alert("You must selet at least one parameter. Please try again.");
    return ("Please try again");
  }

  console.log(makePassword);
  console.log(passInfo.passwordLength, makePassword.length);

  for (let index = makePassword.length; index < passInfo.passwordLength; index++) { 
    makePassword[index] = makePassword[getIndex(makePassword.length)];
  }

  var passwordString = makePassword.join("");

  makePassword = [];
  return passwordString;
}

// function to ask about password length
var passLength = function() {
  // var passwordLength = "";
  var promptLength = window.prompt('How many characters do you wish your password to be? Please enter a value between "8" and "128".');

  // validate prompt answer
  if (promptLength === "" || promptLength === null) {
    window.alert("You must enter a valid criterion. Try again.");
    // return call again and prevent rest of function from running
    return passLength();
  }

  if (promptLength < 8 || promptLength > 128) {
    window.alert("You have chosen an invalid password length. Please choose a valid length.");
    return promptLength();
  }

  console.log("You have chosen " + promptLength + " characters.");

  var passwordLength = promptLength;

  return passwordLength;
}

// function to ask for lower case
var passLower = function() {
  var promptLower = window.confirm("Would you like to include lower case letters?");

  return promptLower;
}

// function to ask for upper case
var passUpper = function() {
  var promptUpper = window.confirm("Would you like to include upper case letters?");

  return promptUpper;
}

// function to ask for numbers
var passNumb = function() {
  var promptNumber = window.confirm("Would you like to include numbers?");

  return promptNumber;
}

// function to ask for special characters
var passSpec = function() {
  var promptSpecial = confirm("Would you like to include special characters?");

  return promptSpecial;
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