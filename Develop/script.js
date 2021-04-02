var uppercase = ["A", "B", "C", "D", "E", "F"];

function getPasswordOpts() {
  var length = parseInt(prompt("How many characters would you like?"));
  if (isNaN(length)) {
    alert("Must be a valid Number");
    return;
  }
  if (length < 8) {
    alert("password can not be less then 8");
    return;
  }
  if (length > 128) {
    alert("password can not be more then 128");
    return;
  }
  var hasUppercase = confirm("click ok to confirm uppercase characters");
  var hasLowercase = confirm("click ok to confirm lowercase characters");
  var hasNumbers = confirm("click ok to confirm numbers characters");
  var hasSpecial = confirm("click ok to confirm special characters");
  if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSpecial) {
    alert("must select one character type");
    return;
  }
  var passwordOptions = {
    length: length,
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
    hasNumbers: hasNumbers,
    hasSpecial: hasSpecial,
  };
  return passwordOptions;
}
function generatePassword() {
  var options = getPasswordOpts();
  console.log(options);
}

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
