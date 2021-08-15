const Engineer = require ("../lib/Engineer")
test("test name", () => {
     const engineer = new Engineer("Matt",2,"matt@gmail.com", "cassbij")
     expect(engineer.name).toEqual("Matt")
})
test("test id", () => {
    const engineer = new Engineer("John",3,"john@gmail.com", "cassbij")
    expect(engineer.id).toEqual(3)
})
test("test email", () => {
    const engineer = new Engineer("Kylee", 4, "kylee24b@gmail.com", "cassbij")
    expect(engineer.email).toEqual("kylee24b@gmail.com")
})
test("test github", () => {
    const engineer = new Engineer("Cassie", 5, "cassie@gmail.com", "cassbij")
    expect(engineer.github).toEqual("cassbij")
})