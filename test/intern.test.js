const Intern = require("../lib/intern");

test("gets school via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern("John", 1, "test@email.com", "UCLA");
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern"; 
    const e = new Intern("John", 1, "test@email.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("gets school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern("John", 1, "test@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
}); 