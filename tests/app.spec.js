const { helloWorld } = require("../lib/app");

describe("Test Suite #1", () => {
  it("Should say Hello World in a rather friendly manner", () => {
    return expect(helloWorld()).toBe("Hello World!");
  });
});

describe("Test Suite #2", () => {
  it("Should fail so I can see what happens", () => {
    return expect(false).toBe(false);
  });
});
