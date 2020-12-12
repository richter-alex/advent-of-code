const fs = require('fs');

// Extract just the password from passwordInput
function parsePassword(passwordInput) {
  const spaceSeparatorIndex = passwordInput.lastIndexOf(' ');
  const password = passwordInput.slice(spaceSeparatorIndex+1);

  return password;
}

// Extract the passwordPolicy from passwordInput
function parsePasswordPolicy(passwordInput) {
  const dashSeparatorIndex = passwordInput.indexOf('-');
  const colonSeparatorIndex = passwordInput.indexOf(':');
  const policyCharIndex = colonSeparatorIndex - 1;
  const min = parseInt(passwordInput.slice(0, dashSeparatorIndex));
  const max = parseInt(passwordInput.slice(dashSeparatorIndex+1, colonSeparatorIndex));
  const policyChar = passwordInput[policyCharIndex];

  return [min, max, policyChar];
}

// Return true or false depending on whether the password is valid or not respectively
// Behaviour changes between part 1 and 2
function validPassword(passwordInput, part) {
  let validPassword = false;
  let policyCharCount = 0;
  const [min, max, policyChar] = parsePasswordPolicy(passwordInput);
  const password = parsePassword(passwordInput);
  
  switch (part) {
    case 1: // Return true if policyCharCount falls between min and max (inclusive)
      password.split('').forEach((char) => {
        if (char === policyChar) ++policyCharCount;
      });

      if (policyCharCount >= min && policyCharCount <= max) validPassword = true;
      break;
    case 2: // Return true if policyChar is present at only one of the (zero based) min or max position
      if (password[min-1] === policyChar) ++policyCharCount;
      if (password[max-1] === policyChar) ++policyCharCount;
      if (policyCharCount === 1) validPassword = true;
      break;
  };

  return validPassword;
}

// Return the number of valid passwords in input.dat
function partOne(inputArray) {
  let validPasswordsCount = 0;

  for (i = 0; i < inputArray.length; ++i) {
    if (validPassword(inputArray[i], 1)) ++validPasswordsCount;
  };

  console.log(`Part 1: ${validPasswordsCount}`);
}

function partTwo(inputArray) {
  let validPasswordsCount = 0;

  for (i = 0; i < inputArray.length; ++i) {
    if (validPassword(inputArray[i], 2)) ++ validPasswordsCount
  };

  console.log(`Part 2: ${validPasswordsCount}`);
}

fs.readFile('./input.dat', 'utf8', (err, data) => {
  if (err) throw 'Error reading file input.';
  const inputArray = data.split("\n");
  partOne(inputArray);
  partTwo(inputArray);
});
