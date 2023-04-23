//Testing for intern
const Intern = require("../lib/Intern")

describe('Constructor', () =>{
    it('New Intern objects should have a name, id, and an email, and a school', () => {
        const newIntern = new Intern("Ben", 1, "Ben@intern.com", "MSU")
        expect(newIntern.name).toBe("Ben")
        expect(newIntern.id).toBe(1)
        expect(newIntern.email).toBe("Ben@intern.com")
        expect(newIntern.school).toBe("MSU")
    })
})

describe('getRole', () => {
    it('getRole should return the role "Intern"', () => {
        const newIntern = new Intern("Ben", 1, "Ben@intern.com", "MSU")
        expect(newIntern.getRole()).toBe("Intern")
    })
})

describe('getSchool', () => {
    it("getSchool should return the Intern's school", () => {
        const newIntern = new Intern("Ben", 1, "Ben@intern.com", "MSU")
        expect(newIntern.getSchool()).toBe("MSU")
    })
})