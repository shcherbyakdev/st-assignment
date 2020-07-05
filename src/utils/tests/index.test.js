import { round } from "utils";

describe("Utils functions", () => {
  describe("round function", () => {
    test("should round number to keep only two decimals", () => {
      const expectedResult = 2.22;
      const result = round(2.22456);

      expect(result).toBe(expectedResult);
    });

    test("should round negative number to keep only two decimals", () => {
      const expectedResult = -5.68;
      const result = round(-5.67777778);

      expect(result).toBe(expectedResult);
    });

    test("should convert string to number and round to keep only two decimals", () => {
      const expectedResult = 2.23;
      const result = round("2.232223");

      expect(result).toBe(expectedResult);
    });
  });
});
