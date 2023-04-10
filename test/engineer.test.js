const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("John", 1, "test@email.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() shoud return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("John", 1, "test@email.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("John", 1, "test@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

