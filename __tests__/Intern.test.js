const Intern = require ("../lib/Intern")
test("test name", () => {
     const intern = new Intern("Matt",2,"matt@gmail.com", "univerity of utah")
     expect(intern.name).toEqual("Matt")
})
test("test id", () => {
    const intern = new Intern("John",3,"john@gmail.com", "univerity of utah")
    expect(intern.id).toEqual(3)
})
test("test email", () => {
    const intern = new Intern("Kylee", 4, "kylee24b@gmail.com", "univerity of utah")
    expect(intern.email).toEqual("kylee24b@gmail.com")
})
test("test github", () => {
    const intern = new Intern("Cassie", 5, "cassie@gmail.com", "univerity of utah")
    expect(intern.school).toEqual("univerity of utah")
})