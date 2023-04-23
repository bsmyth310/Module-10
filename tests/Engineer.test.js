//testing for Engineer
const Engineer = require("../lib/Engineer")

describe('Constructor', () =>{
    it('New engineer objects should have a name, id, and an email, and a github username', () => {
        const newEngineer = new Engineer("Ben", 1, "Ben@engineer.com", "Ben")
        expect(newEngineer.name).toBe("Ben")
        expect(newEngineer.id).toBe(1)
        expect(newEngineer.email).toBe("Ben@engineer.com")
        expect(newEngineer.github).toBe("Benh")
    })
})

describe('getRole', () => {
    it('getRole should return the role "Engineer"', () => {
        const newEngineer = new Engineer("Ben", 1, "Ben@engineer.com", "Ben")
        expect(newEngineer.getRole()).toBe("Engineer")
    })
})

describe('getGithub', () => {
    it("getGithub should return the Engineer's github username", () => {
        const newEngineer = new Engineer("Ben", 1, "Ben@engineer.com", "Ben")
        expect(newEngineer.getGithub()).toBe("Ben")
    })
})