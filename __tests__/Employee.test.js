const Employee = require ("../lib/Employee")
test("test name", () => {
     const employee = new Employee("Matt",2,"matt@gmail.com")
     expect(employee.name).toEqual("Matt")
})
test("test id", () => {
    const employee = new Employee("John",3,"john@gmail.com")
    expect(employee.id).toEqual(3)
})
test("test email", () => {
    const employee = new Employee("Kylee", 4, "kylee24b@gmail.com")
    expect(employee.email).toEqual("kylee24b@gmail.com")
})
