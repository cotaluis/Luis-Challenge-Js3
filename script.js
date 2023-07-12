var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", handleGeneratePassword);

function handleGeneratePassword() {
  var length = prompt("Enter the desired password length (8-128 characters):");
  length = validateLength(length);

  var includeNumbers = confirm("Include numbers in the password?");
  var includeSymbols = confirm("Include symbols in the password?");

  var password = generateRandomPassword(length, includeNumbers, includeSymbols);
  var passwordInput = document.getElementById("password");
  passwordInput.value = password;
}

function validateLength(length) {
  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    length = prompt("Enter the desired password length (8-128 characters):");
    length = validateLength(length);
  }

  return length;
}

function generateRandomPassword(length, includeNumbers, includeSymbols) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) {
    charset += "0123456789";
  }
  if (includeSymbols) {
    charset += "!@#$%^&*()-_=+";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}