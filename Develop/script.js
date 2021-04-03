var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

function getPasswordOpts() {
  var counter = 0;
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
  var rndType;
  var rndIdx;
  var key;
  var passw = "";
  var passwLength = 0;

  while (passwLength < options.length) {
    rndType = Math.floor(Math.random() * options.counter);

    if (options.hasUppercase || options.hasLowercase) {
      // Generate a random number between 0 and 25
      rndIdx = Math.floor(Math.random() * 26);

      if (options.hasUppercase && passwLength < options.length) {
        key = uppercase[rndIdx];
        // Push key to the password
        passw = passw + key;
        passwLength++;
      }

      if (options.hasLowercase && passwLength < options.length) {
        key = lowercase[rndIdx];
        // Push key to the password
        passw = passw + key;
        passwLength++;
      }
    }

    if (options.hasNumbers && passwLength < options.length) {
      rndIdx = Math.floor(Math.random() * 10);
      key = numbers[rndIdx];
      // Push key to the password
      passw = passw + key;
      passwLength++;
    }
    if (options.hasSpecial && passwLength < options.length) {
      rndIdx = Math.floor(Math.random() * 8);
      key = special[rndIdx];
      // Push key to the password
      passw = passw + key;
      passwLength++;
    }
  }

  return passw;
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
