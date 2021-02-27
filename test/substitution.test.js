const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("should return false if a 26 letter subsitution alphabet isnt provided", () => {
    const actual = substitution("message", "short");
    expect(actual).to.be.false;
  });
  it("should maintain spaces and special characters when encoding", () => {
    const actual = substitution(
      "**A __peculiar >>message!!",
      "zyxwvutsrqponmlkjihgfedcba"
    );
    expect(actual).to.equal("**z __kvxforzi >>nvhhztv!!");
  })
  it("should accept special characters in subsitution alphabet", () => {
    const actual = substitution("hello", "1973468250._*-+)(|&^%$#@!~");
    expect(actual).to.equal("24__+");
  });
  it("should return false if there are any duplicate characters in substitution alphabet", () => {
    const actual = substitution("hello", "--------------------------");
    expect(actual).to.be.false;
  });
  it("should return false if the substitution alphabet is missing", () =>{
    const actual = substitution("a message")
    expect(actual).to.be.false
  })
  it("should remove special characters from message if there are special characters in sub alphabet", () =>{
    const actual = substitution("**A __peculiar >>message!!","1973468250._*-+)(|&^%$#@!~")
    expect(actual).to.equal("1 )47%_51| >>*4&&184")
  })
  it("should ignore capital letters", () =>{
    const actual = substitution("HELLO", "zyxwvutsrqponmlkjihgfedcba")
    expect(actual).to.equal("svool")
  })
  it("should return false if a space is in sub alphabet", () =>{
    const actual = substitution("hello", "zy wvutsrqponmlkjihgfedcba")
    expect(actual).to.be.false
  })
});
