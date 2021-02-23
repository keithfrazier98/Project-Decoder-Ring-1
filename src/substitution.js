// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) return false;

    //convert inputed alphabet to UTF numbers
    const inputAlphabetArray = alphabet.split("");

    try {
      inputAlphabetArray.forEach((char, i) => {
        inputAlphabetArray.forEach((char2, index) => {
          if (char === char2 && index != i)
            throw "Two or more characters are the same. Please revise alphabet.";
        });
      });
    } catch(error) {
      console.log(error)
      return false
    }

    if (inputAlphabetArray.includes(" ")) return false;
    const inputUTFCharArray = [];
    inputAlphabetArray.forEach((char) => {
      inputUTFCharArray.push(char.charCodeAt());
    });

    //create standart alphabet in UTF numbers (lowercase)
    const standardAlphabetChars = [...Array(27).keys()];
    const stdUTFAlphabetNums = standardAlphabetChars.map((num) => num + 97);

    //create standard alphabet in UTF numbers (uppercase)
    const stdUpCaseAlphabet = [...Array(27).keys()];
    const stdUpCaseUTFNumer = stdUpCaseAlphabet.map((num) => num + 65);

    //convert input to UTF numbers
    upCaseIndexes = [];
    const saveUpperCaseIndex = (str) => {
      for (let i = 0; i < str.length; i++) {
        if (stdUpCaseUTFNumer.includes(str[i].charCodeAt())) {
          upCaseIndexes.push(i);
        } 
      }
    };

    saveUpperCaseIndex(input);
    const lowerCaseInput = input.toLowerCase();
    const inputArray = lowerCaseInput.split("");

    //empty UTF output array
    const UTFoutput = [];
    let output = "";

    //if encode, ignore spaces and special characters, otherwise convert against alphabet
    if (encode) {
      for (let i = 0; i < inputArray.length; i++) {
        if (stdUTFAlphabetNums.includes(inputArray[i].charCodeAt())) {
          //identify letter
          const currLett = inputArray[i];
          //identify UTF number of letter at current index
          const currLettUTF = currLett.charCodeAt();
          //identify index of UTF number in regular alphabet
          const stdIndex = stdUTFAlphabetNums.findIndex(
            (num) => num === currLettUTF
          );
          //identify UTF number at stdIndex in input alphabet and push to UTFoutput
          UTFoutput.push(inputUTFCharArray[stdIndex]);
        } else {
          //else if special letter, push to UTFoutput
          UTFoutput.push(inputArray[i].charCodeAt());
        }
      }
    } else {
      //decode
      //loop through input message array
      for (let i = 0; i < inputArray.length; i++) {
        //identify UTF number of current character
        const currLett = inputArray[i];
        const currLettUTF = currLett.charCodeAt();
        //if UTF number is in the input alphabet
        if (inputUTFCharArray.includes(currLettUTF)) {
          //find index of current character
          const inpIndex = inputUTFCharArray.findIndex(
            (num) => num === currLettUTF
          );
          //find character of regular alphabet at index
          UTFoutput.push(stdUTFAlphabetNums[inpIndex]);
        } else {
          //if character at current index is not in input alphabet
          //push character to output string
          UTFoutput.push(inputArray[i].charCodeAt());
        }
      }
      //push character to output string
    }

    UTFoutput.forEach((UTFNum) => {
      if (output.length != upCaseIndexes[0]) {
        output += String.fromCharCode(UTFNum);
      } else {
        let upCaseLett = String.fromCharCode(UTFNum).toUpperCase();
        output += upCaseLett;
        upCaseIndexes.shift();
      }
    });

    return output;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
