// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function unicharArrayToString(inputArray) {
    outputString
    input.forEach((charCode) => {

    })
  }


  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift > 25 || shift < -26) return false
    
    input = input.toLowerCase()
    const inputArray = input.split("")
    const alphabetChars = [...Array(27).keys()]
    const unicodeChars = alphabetChars.map((char) => char + 97)
    unicodeChars.pop()
    let output = []


    if(encode) {
      inputArray.forEach((char) =>{
        let charCode = char.charCodeAt()
        if(unicodeChars.includes(charCode)){
          charCode += shift
          output.push(String.fromCharCode(charCode))
        } else {
          output.push(char)
        }
      })
    } else {
      inputArray.forEach((char) => {
        let charCode = char.charCodeAt()
        if(unicodeChars.includes(charCode)){
          charCode -= shift
          output.push(String.fromCharCode(charCode))
        } else {
          output.push(char)
        }
    })}
    output = output.join("")
    return output
  }

  return {
    caesar,
  };
} )();

//let output = caesarModule.caesar("HELLO", 1, true)


module.exports = caesarModule.caesar;
