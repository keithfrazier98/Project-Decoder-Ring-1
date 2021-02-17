// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const { util } = require("chai");

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let square = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: ["i", "j"],
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    output = [];
    let inputArray = input.split("");

    if (encode) {
      inputArray.forEach((char) => {
        for (let number in square) {
          let letter = square[number];
          if (letter === char) output.push(number);
        }
      });
    } else {
      for (let i = 0; i < input.length; i += 2) {
        const [first, second, ...rest] = inputArray;
        inputArray = rest;
        encodedNumber = first + second;
        let decodedLetter = square[encodedNumber];
        output.push(decodedLetter);
      }
    }
    output = output.join("");
    return output;
  }

  return {
    polybius,
  };
})();

//console.log(polybiusModule.polybius("3251131343", false));
//console.log(polybiusModule.polybius("hello"))

module.exports = polybiusModule.polybius;
