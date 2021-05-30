import { getFizzBuzzResult } from "../src/fizzbuzz/index";
describe("FizzBuzz function working properly", () => {
  test("Test case for FizzBuzz", () => {
    let count = 15;
    const result = getFizzBuzzResult(count);
    const expectedResult = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ];
    expect(result).toEqual(expectedResult);
  });
});
