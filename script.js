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

  //Declare empty String for the user password
  var userPassword = "";

  //Declare variable for the password length
  var passwordLength = prompt("Please enter the length of your password");
  var passwordLength = parseInt(passwordLength);

  //Validate the password length
  if (passwordLength >= 8 && passwordLength <= 128) {

    //Promt for 4 character types to include in the password 
    var addUpperCase = confirm("Would you like to have Uppercase characters?")
    if (addUpperCase === true) {
      passwordOptions += upperCase;
      console.log(passwordOptions);
    }
    var addLowerCase = confirm("Would you like to have Lowercase characters?")
    if (addLowerCase === true) {
      passwordOptions += lowerCase;
      console.log(passwordOptions);
    }
    var addSpecialChar = confirm("Would you like to have Special characters?")
    if (addSpecialChar === true) {
      passwordOptions += specChar;
      console.log(passwordOptions);
    }
    var addNums = confirm("Would you like to have numeric characters?")
    if (addNums === true) {
      passwordOptions += numeric;
      console.log(passwordOptions);
    }

    //Validate if at least one character type was selected
    if (passwordOptions.length === 0) {
      alert("At least one character type should be selected");
      console.log(passwordOptions.length);
    }

    //Iterate from the options the user picked and generate unique password
    for (var i = 0; i < passwordLength; i++) {
      var num = Math.floor((Math.random() * passwordOptions.length));
      userPassword += passwordOptions.charAt(num);
    }
    console.log(userPassword);
    return userPassword;
  } else {
    alert("The password length must be at least 8 characters and no more than 128 characters");
    return userPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
