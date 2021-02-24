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
});
