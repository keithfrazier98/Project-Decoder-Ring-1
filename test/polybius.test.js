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
    it("should decode I and J to (i/j)", () =>{
        const actual = polybius("42", false)
        expect(actual).to.equal("(i/j)")
    })
    it("should maintain spaces when encoding",() =>{
        const encode = polybius("test case")
        expect(encode).to.equal("44513444 31113451")
    })

    it("should maintain spaces when decoding", () =>{
        const decode = polybius("!!11 23 23 11.!", false)
        expect(decode).to.equal("!!a m m a.!")
    })

    it("should ignore capital letters", () => {
        const actual = polybius("CAPITAL")
        expect(actual).to.equal("31115342441113")
    })

    it("should ignore special characters", () => {
        const actual = polybius("hello!!")
        expect(actual).to.equal("3251131343!!")
    })

    it("should return the same message when an decoded message is passed to be decoded",() =>{
        const actual = polybius("This is a technically decoded message. It should return the exact way it was passed.", false)
        expect(actual).to.equal("This is a technically decoded message. It should return the exact way it was passed.")
    })

    it("should return the same message when an encoded message is passed to be encoded", () =>{
        const actual = polybius("44324234 4234 11 4451313233423111131345 41513143415141 23513434112251. 4244 343243541341 245144542433 443251 5135113144 251145 4244 251134 531134345141.")
        expect(actual).to.equal("44324234 4234 11 4451313233423111131345 41513143415141 23513434112251. 4244 343243541341 245144542433 443251 5135113144 251145 4244 251134 531134345141.")
    })

    it("should consider any number greater than 5 a special character", () =>{
        const actual = polybius("42 25113344 8117 115353135134.", false)
        expect(actual).to.equal("(i/j) want 8117 apples.")
    })
})