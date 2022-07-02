const operations = require("../index");

describe("Operations basics", () => {
  it("should return the sum of two numbers", () => {
    expect(operations.sum(1, 2)).toBe(3);
  });

  it("should return the res of two numbers", () => {
    expect(operations.res(1, 2)).toBe(-1);
  });
});

describe("Operations medium", () => {
  it("should return the div of two numbers", () => {
    expect(operations.div(4, 2)).toBe(2);
  });

  it("should return the mul of two numbers", () => {
    expect(operations.mul(3, 2)).toBe(6);
  });
});
