// Assignment code here
window.alert("Hello. Welcome to The World's Most Difficult Password Generator. First, pick your variables. Then, click generate password.")

function generatePassword() {

  // set of required parameters as determined by user
  var makePassword = []

  // function to select an index from the array
  function getIndex(bigly) {
    return Math.floor(Math.random() * bigly)
  };

  //when generatePassword runs, passInfo calls the other functions.
  var passInfo = {
    length: passLength(),
    lower: passLower(),
    upper: passUpper(),
    number: passNumb(),
    special: passSpec(),
  };

  console.log(passInfo)

  // ifs to include parameters selected by user

  if(passInfo.lower) {
    makePassword.push(randomLower)
  }

  if(passInfo.upper) {
    makePassword.push(randomUpper)
  }

  for (let index = 1; index <= passInfo.length; index++) { 
    getIndex(makePassword.length)
  }
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

// function to ask for lower case
var passLower = function() {
  var lower = "";
  var promptLower = window.prompt("Would you like to include lower case letters? Type 'yes' or 'no'.");

  // validate prompt answer
  if (promptLower === "" || promptLower === null) {
    window.alert("You must enter a valid criterion. Try again.");
    // return call again and prevent rest of function from running
    return passLower();
  }

  lower = promptLower.toLowerCase();

  return lower;
}

// function to ask for upper case
var passUpper = function() {
  var upper = "";
  var promptUpper = window.prompt("Would you like to include upper case letters? Type 'yes' or 'no'.");

  // validate prompt answer
  if (promptUpper === "" || promptUpper === null) {
    window.alert("You must enter a valid criterion. Try again.");
    // return call again and prevent rest of function from running
    return passUpper();
  }

  upper = promptUpper.toLowerCase();

  return upper;
}

// function to ask for numbers
var passNumb = function() {
  var number = "";
  var promptNumber = window.prompt("Would you like to include numbers? Type 'yes' or 'no'.");

  // validate prompt answer
  if (promptNumber === "" || promptNumber === null) {
    window.alert("You must enter a valid criterion. Try again.");
    // return call again and prevent rest of function from running
    return passNumb();
  }

  number = promptNumber.toLowerCase();

  return number;
}

// function to ask for numbers
var passSpec = function() {
  var special = "";
  var promptSpecial = confirm("Would you like to include special characters?");

  special = promptSpecial.toLowerCase();

  return special;
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