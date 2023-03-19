const Employee = require('../lib/employee');

test ("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("gets name via constructor arguments",() => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("gets id via constructor argument", () => {
    const testValue = 100; 
    const e = new Employee("Steve", testValue);
    expect(e.id).toBe(testValue);
});

test("gets email via constructor argument", () => {
    const testValue = "test@email.com";
    const e = new Employee("Steve", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("gets name via getName()", () => {
    const testValue = "John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("gets id via getId()", () => {
    const testValue = 100; 
    const e = new Employee("Steve", testValue);
    expect(e.getId()).toBe(testValue);
});

test("gets email via getEmail()", () => {
    const testValue = "test@email.com";
    const e = new Employee("Steve", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("John", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
});


