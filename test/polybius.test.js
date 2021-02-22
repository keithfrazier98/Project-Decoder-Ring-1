const polybius = require("../src/polybius")
const {expect} = require("chai")

describe("polybius", () =>{
    it("should return a string", () =>{
        const actual = polybius("hello")
        expect(actual).to.be.string
    })
    it("should return false if string length is uneven when decoding(exluding spaces)", () =>{
        const actual = polybius("11411", false)
        expect(actual).to.be.false
    })
    it("should encode I and J to 42",() =>{
        const actual = polybius("ij")
        expect(actual).to.equal("4242")
    })
    it("should decode I and J appropriately", () =>{
        const actual = polybius("42", false)
        expect(actual).to.equal("(i/j)")
    })
    it("should maintain spaces when encoding",() =>{
        const encode = polybius("test case")
        expect(encode).to.equal("44513444 31113451")
    })

    it("should maintain spaces when decoding", () =>{
        const decode = polybius("!!11 23 23 11.!", false)
        expect(decode).to.equal("!! a m m a.!")
    })

    it("should ignore capital letters", () => {
        const actual = polybius("CAPITAL")
        expect(actual).to.equal("31115342441113")
    })

    it("should ignore special characters", () => {
        const actual = polybius("hello!!")
        expect(actual).to.equal("3251131343!!")
    })
})