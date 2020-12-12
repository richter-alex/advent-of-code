const fs = require('fs');

function partOne(inputArray) {
  // Find the two entries that sum to 2020 and then multiply those two numbers together.
  let x, y, sum;
  for (i = 0; i < inputArray.length; ++i) {
    x = parseInt(inputArray[i]);
    for (j = i + 1; j < inputArray.length; ++j) {
      y = parseInt(inputArray[j]);
      sum = x + y;
      if (sum == 2020) {
        console.log(x*y);
        break;
      };
    };
  };
}

function partTwo(inputArray) {
  // Find the three entries that sum to 2020 and then multiply those three numbers together.
  let x, y, z, sum;
  for (i=0; i < inputArray.length; ++i) {
    x = parseInt(inputArray[i]);
    for (j= i + 1; j < inputArray.length; ++j) {
      y = parseInt(inputArray[j]);
      for (k = j + 1; k < inputArray.length; ++k) {
        z = parseInt(inputArray[k]);
        sum = x + y + z;
        if (sum == 2020) {
          console.log(x * y * z);
          break;
        };
      };
    };
  };
}

fs.readFile('./input.dat', 'utf8', (err, data) => {
  if (err) throw 'Error reading file input.';
  const inputArray = data.split("\n");
  partOne(inputArray);
  partTwo(inputArray);
});
