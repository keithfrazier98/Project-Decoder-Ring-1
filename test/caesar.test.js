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
});
