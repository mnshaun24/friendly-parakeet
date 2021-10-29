// Assignment code here

// function to ask about password length
var passLength = function() {
  var promptLength = window.prompt('How many characters do you wish your password to be? Please enter a value between "8" and "128".');

  // validate prompt answer
  if (promptLength === "" || promptLength === null) {
    window.alert("You must enter a valid criterion. Try again.");
    // return call again and prevent rest of function from running
    return passLength();
  }
}



// Function to generate a new password
var setPass = function() {
  // reset previous password
  passInfo.reset()
}



var passInfo = {
  length: passLength()
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
