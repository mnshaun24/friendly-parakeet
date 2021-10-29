// Assignment code here

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

  console.log("You have chosen " + passLength + " characters.");

  return length;
}

var passCharacters = function() {
  var characterCase = "";
  var promptCase = window.prompt("What cases would you like to use? Choose 'upper', 'lower', or 'both'?)

  // validate prompt answer
  if (promptCase === "" || promptCase === null) {
    window.alert("You must enter a valid criterion. Try again.");
    // return call again and prevent rest of function from running
    return passCharacters();
  }

  // convert to lower case
  promptCase = promptCase.toLowerCase();

  // confirm choice
  window.alert("You have chosen " + promptCase);

  return characterCase;
}





// Function to generate a new password
var setPass = function() {
  // reset previous password
  passInfo.reset()
  console.log("Hi there");
}



var passInfo = {
  length: passLength()
  characterCase: passCharacters()
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
