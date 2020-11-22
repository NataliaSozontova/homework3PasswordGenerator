// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
})

// Function to generate password
function generatePassword() {

  // Declare options for password characters types
  var lowerCase = "abcdefghjkmnpqrstuvwxyz";
  console.log(lowerCase);
  var upperCase = lowerCase.toUpperCase();
  console.log(upperCase);
  var numeric = "0123456789";
  console.log(numeric);
  var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  console.log(specChar);

  //Declare empty String for the password options
  var passwordOptions = "";

  //Declare variable for the password length
  var passwordLength = prompt("Please enter the length of your password");
  var passwordLength = parseInt(passwordLength);
  console.log(typeof (passwordLength));
  
  //Check the conditions for the password lenght
  if (passwordLength < 8) {
    alert("The password's length should be at least 8 characters");
    var passwordLength = prompt("Please enter the length of your password");
    var passwordLength = parseInt(passwordLength);
    console.log(typeof (passwordLength));
  }
  if (passwordLength > 128) {
    alert("The password's length should be no be more than 128 characters");
    var passwordLength = prompt("Please enter the length of your password");
    var passwordLength = parseInt(passwordLength);
    console.log(typeof (passwordLength));
  }

  //offer user to pick up from 4 characters options avalable 
  var addUpperCase = confirm("Would you like to have Uppercase characters?")
  if (addUpperCase === true) {
    passwordOptions = passwordOptions + upperCase;
    console.log(passwordOptions);
  }
  var addLowerCase = confirm("Would you like to have Lowercase characters?")
  if (addLowerCase === true) {
    passwordOptions = passwordOptions + lowerCase;
    console.log(passwordOptions);
  }
  var addSpecialChar = confirm("Would you like to have Special characters?")
  if (addSpecialChar === true) {
    passwordOptions = passwordOptions + specChar;
    console.log(passwordOptions);
  }
  var addNums = confirm("Would you like to have numeric characters?")
  if (addNums === true) {
    passwordOptions = passwordOptions + numeric;
    console.log(passwordOptions);
  }

  //Declare empty String for the user password
  var userPassword = "";
  
  //Iterate from the options the user picked and generate unique password
  for (var i = 0; i <= passwordLength; i++) {
    var num = Math.floor((Math.random() * passwordOptions.length));
    userPassword += passwordOptions.charAt(num);
  }
  console.log(userPassword);
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
