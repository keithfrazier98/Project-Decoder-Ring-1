const caeser = require("../src/caesar");
const { expect } = require("chai");

describe("caeser", () => {
  it("should return false if shift is greater than 26", () => {
    const actual = caeser("message", 27, true);
    expect(actual).to.be.false;
  });

  it("should return false if shift is less than -26", () => {
    const actual = caeser("message", -27, true);
    expect(actual).to.be.false;
  });

  it("should return false if shift is 0", () => {
    const actual = caeser("message", 0, true);
    expect(actual).to.be.false;
  });

  it("should return false if shift is missing", () => {
    const actual = caeser("message", true);
    expect(actual).to.be.false;
  });
  it("should return false if input is missing", () =>{
    const actual = caeser("", 4)
    expect(actual).to.be.false
  })
  it("should encode a message with shift value", () =>{
    const actual = caeser("A message!", 5)
    expect(actual).to.equal("f rjxxflj!")
  })
  it("should wrap alphabet if shift extends past a or z", () =>{
    const actual = caeser("A message!", 25)
    expect(actual).to.equal("z ldrrzfd!")
  })

});
