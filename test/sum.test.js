const sum = require("../src/sum");

describe("Sum function", () => {
  test("should add two positive numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("should add a positive and a negative number correctly", () => {
    expect(sum(2, -3)).toBe(-1);
  });

  test("should add two negative numbers correctly", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
