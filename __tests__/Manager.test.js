const Manager = require ("../lib/Manager")
test("test name", () => {
     const manager = new Manager("Matt",2,"matt@gmail.com", "cassbij")
     expect(manager.name).toEqual("Matt")
})
test("test id", () => {
    const manager = new Manager("John",3,"john@gmail.com")
    expect(manager.id).toEqual(3)
})
test("test email", () => {
    const manager = new Manager("Kylee", 4, "kylee24b@gmail.com")
    expect(manager.email).toEqual("kylee24b@gmail.com")
})
test("test officeNumber", () => {
    const manager = new Manager("Cassie", 5, "cassie@gmail.com",6)
    expect(manager.officeNumber).toEqual(6)
})