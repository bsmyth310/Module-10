const Employee = require("../lib/Employee")

    describe('Constructor', () =>{
        it('New employee objects should have a name, id, and an email', () => {
            const newEmployee = new Employee("Ben", 1, "Ben@employee.com")
            expect(newEmployee.name).toBe("Ben")
            expect(newEmployee.id).toBe(1)
            expect(newEmployee.email).toBe("Ben@employee.com")
        })
    })

    describe('getRole', () => {
        it('getRole should return the role "Employee"', () => {
            const newEmployee = new Employee("Ben", 1, "Ben@employee.com")
            expect(newEmployee.getRole()).toBe("Employee")
        })
    })