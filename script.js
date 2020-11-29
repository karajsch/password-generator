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
      passwordChars += charsLowercase;
    }
    answer = prompt(
      "Do you want uppercase characters? Press 'y' for yes and 'n' for no."
    );
    if (answer === "y" || answer === "Y") {
      passwordChars += charsUppercase;
    }
    answer = prompt("Do you want numbers? Press 'y' for yes and 'n' for no.");
    if (answer === "y" || answer === "Y") {
      passwordChars += charsNumbers;
    }
    answer = prompt(
      "Do you want special characters? Press 'y' for yes and 'n' for no."
    );
    if (answer === "y" || answer === "Y") {
      passwordChars += charsSpecial;
    }
  }

  if (passwordChars === "") {
    alert("No characters in password");
    password = "";
  } else {
    var i;
    for (i = 0; i < passwordLength; i++) {
      password += passwordChars.charAt(
        Math.floor(Math.random() * passwordChars.length)
      );
    }
  }

  return password;
}
