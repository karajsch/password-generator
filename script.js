// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My variables...
function generatePassword() {
  var charsLowercase = "abcdefghiklmnopqrstuvwxyz";
  var charsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charsNumbers = "0123456789";
  var charsSpecial = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var passwordChars = "";
  var passwordMinLength = 8;
  var passwordMaxLength = 128;
  var password = "";
  var passwordLength = 0;
  var answer = "";

  passwordLength = prompt(
    "How many characters do you want in your new password?"
  );

  if (passwordLength < passwordMinLength) {
    alert("Your password must contain at least 8 characters.");
  } else if (passwordLength > passwordMaxLength) {
    alert("Your password must contain less than 128 characters.");
  } else {
    answer = prompt(
      "Do you want lowercase characters? Press 'y' for yes and 'n' for no."
    );
    if (answer === "y" || answer === "Y") {
      passwordChars += charsLowercase; // This adds lowercase to the final password
    }
    answer = prompt(
      "Do you want uppercase characters? Press 'y' for yes and 'n' for no."
    );
    if (answer === "y" || answer === "Y") {
      passwordChars += charsUppercase; // This adds uppercase to the final password
    }
    answer = prompt("Do you want numbers? Press 'y' for yes and 'n' for no.");
    if (answer === "y" || answer === "Y") {
      passwordChars += charsNumbers; // This adds numbers to final password
    }
    answer = prompt(
      "Do you want special characters? Press 'y' for yes and 'n' for no."
    );
    if (answer === "y" || answer === "Y") {
      passwordChars += charsSpecial; // This adds special characters to final password
    }
  }

  if (passwordChars === "") {
    alert("No characters in password");
    password = ""; // This sends an alert when the user hasn't specified any characters
  } else {
    var i;
    for (i = 0; i < passwordLength; i++) {
      password += passwordChars.charAt(
        Math.floor(Math.random() * passwordChars.length) //This randomizes the data from the array to create a password that meets the user's criteria
      );
    }
  }

  return password;
}
