// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//const { util } = require("chai");

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    //remove special characters and spaces from input
    const numbers = ["0","1","2","3","4","5","6","7","8","9"]
    
    let inputArray = input.split("");
    let inputArrayNumbers =[]
    let specialChars = {}
      inputArray.forEach((char, index) =>{
        if(numbers.includes(char)){
          inputArrayNumbers.push(char)
        } else {
          specialChars[index] = char
        }
      })
    
    

    try{
        if(!encode){
          if(inputArrayNumbers.length % 2 != 0){
            throw `Length of encoded message is an odd number (${input.length})`
          }
        } 
      } catch (error){
        console.log(error)
        return false
      }


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

    if (encode) { //encode input
      inputArray.forEach((char) => {
        lowCaseChar = char.toLowerCase()
        if(Object.values(square).includes(lowCaseChar) || square[42].includes(lowCaseChar)){
        if (lowCaseChar === "i" || lowCaseChar === "j") output.push("42")
        for (let number in square) {
          let letter = square[number];
          if (letter === lowCaseChar) {
            output.push(number);
          } 
        }
      } else {
        output.push(char)
      }
      });
    } else {
      //decode numbers
      //length changes through for loop so origional length is stored and used for loop
      let inputArrayNumbersLength = inputArrayNumbers.length
      for (let i = 0; i < inputArrayNumbersLength; i += 2) {
        const [first, second, ...rest] = inputArrayNumbers;
        inputArrayNumbers = rest;
        encodedNumber = first + second;
        let decodedLetter = null
        if (encodedNumber === "42"){
          decodedLetter = "(i/j)"
        } else {
          decodedLetter = square[encodedNumber];
        }
        output.push(decodedLetter);
      }
      //add in special characters
      for (let index in specialChars){
        output.splice(index /2, 0, specialChars[index])
      }
    }

    
    output = output.join("");
    return output;
  }

  return {
    polybius,
  };
})();

console.log(polybiusModule.polybius("!!11 23 23 11.!", false));
console.log(polybiusModule.polybius("!!1123 2311.! 11121314141315", false));

console.log(polybiusModule.polybius("test case"))
console.log(polybiusModule.polybius("2345 23513434112251", false))

module.exports = polybiusModule.polybius;
