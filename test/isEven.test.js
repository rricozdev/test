const isEven = require("../src/isEven");

describe("isEven function", () => {
  test("should return true for an even number", () => {
    expect(isEven(4)).toBe(true);
  });

  test("should return false for an odd number", () => {
    expect(isEven(7)).toBe(false);
  });

  test("should return true for zero", () => {
    expect(isEven(0)).toBe(true);
  });
});
