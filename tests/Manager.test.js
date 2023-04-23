//Testing for Manager
const Manager = require("../lib/Manager")

describe('Constructor', () =>{
    it('New Manager objects should have a name, id, and an email, and an office number', () => {
        const newManager = new Manager("Ben", 1, "Ben@manager.com", 123)
        expect(newManager.name).toBe("John")
        expect(newManager.id).toBe(1)
        expect(newManager.email).toBe("Ben@manager.com")
        expect(newManager.officeNumber).toBe(123)
    })
})

describe('getRole', () => {
    it('getRole should return the role "Manager"', () => {
        const newManager = new Manager("Ben", 1, "Ben@manager.com", 123)
        expect(newManager.getRole()).toBe("Manager")
    })
})