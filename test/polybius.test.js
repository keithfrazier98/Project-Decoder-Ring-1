const polybius = require("../src/polybius")
const {expect} = require("chai")

describe("polybius", () =>{
    it("should return a string", () =>{
        const actual = polybius("Hello!")
        expect(actual).to.be.string
    })
    it("should return false if string length is uneven (exluding spaces)", () =>{
        const actual = polybius("11411")
        expect(actual).to.be.false
    })
})