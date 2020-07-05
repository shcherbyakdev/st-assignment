import CustomOne from "logic/customOne";
import { round } from "utils";

describe("Custom 1 mode calculation methods", () => {
  describe("getResult method", () => {
    test("should return object with 'M' value for H key, when (a: true, b: true, c: false) and properly calculate relevant function from Base mode", () => {
      const H_VALUE = "M";
      const a = true;
      const b = true;
      const c = false;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const expectedKResult = 1.44;

      const base = new CustomOne(a, b, c, d, e, f);
      const expectedResult = { H: H_VALUE, K: expectedKResult };
      const result = base.getResult();

      expect(result).toEqual(expectedResult);
    });

    test("should return object with 'P' value for H key, when (a: true, b: true, c: true) and properly calculate new function for Custom 1 mode", () => {
      const H_VALUE = "P";
      const a = true;
      const b = true;
      const c = true;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const expectedKResult = 2.42;

      const base = new CustomOne(a, b, c, d, e, f);
      const expectedResult = { H: H_VALUE, K: expectedKResult };
      const result = base.getResult();

      expect(result).toEqual(expectedResult);
    });

    test("should return object with 'T' value for H key, when (a: false, b: true, c: true) and properly calculate relevant function from Base mode", () => {
      const H_VALUE = "T";
      const a = false;
      const b = true;
      const c = true;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const expectedKResult = 1.0;

      const base = new CustomOne(a, b, c, d, e, f);
      const expectedResult = { H: H_VALUE, K: expectedKResult };
      const result = base.getResult();

      expect(result).toEqual(expectedResult);
    });

    test("should return error, when (a: false, b: false, c: false) as in Base mode", () => {
      const a = false;
      const b = false;
      const c = false;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const base = new CustomOne(a, b, c, d, e, f);
      const expectedResult = { error: "[error]" };

      const result = base.getResult();

      expect(result).toEqual(expectedResult);
    });

    test("should return error, when (a: false, b: false, c: true) as in Base mode ", () => {
      const a = false;
      const b = false;
      const c = true;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const base = new CustomOne(a, b, c, d, e, f);
      const expectedResult = { error: "[error]" };

      const result = base.getResult();

      expect(result).toEqual(expectedResult);
    });

    test("should return error, when (a: false, b: true, c: false) as in Base mode", () => {
      const a = false;
      const b = true;
      const c = false;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const base = new CustomOne(a, b, c, d, e, f);
      const expectedResult = { error: "[error]" };

      const result = base.getResult();

      expect(result).toEqual(expectedResult);
    });

    test("should return error, when (a: true, b: false, c: true) as in Base mode", () => {
      const a = true;
      const b = false;
      const c = true;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const base = new CustomOne(a, b, c, d, e, f);
      const expectedResult = { error: "[error]" };

      const result = base.getResult();

      expect(result).toEqual(expectedResult);
    });
  });

  describe("getM method", () => {
    test("should properly calculate the expression d + (d * e) / 10 from Base mod", () => {
      const a = true;
      const b = true;
      const c = false;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const expectedResult = d + (d * e) / 10;
      const base = new CustomOne(a, b, c, d, e, f);

      const result = base.getM();
      expect(result).toBe(round(expectedResult));
    });
  });

  describe("getP method", () => {
    test("should properly calculate the expression 2 * d + (d * e) / 100 which overrides expression from Base mod", () => {
      const a = true;
      const b = true;
      const c = true;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const expectedResult = 2 * d + (d * e) / 100;
      const base = new CustomOne(a, b, c, d, e, f);

      const result = base.getP();
      expect(result).toBe(round(expectedResult));
    });
  });

  describe("getT method", () => {
    test("should properly calculate the expression d - (d * f) / 30 from Base mod", () => {
      const a = false;
      const b = true;
      const c = true;
      const d = 1.2;
      const e = 2;
      const f = 5;

      const expectedResult = d - (d * f) / 30;
      const base = new CustomOne(a, b, c, d, e, f);

      const result = base.getT();
      expect(result).toBe(round(expectedResult));
    });
  });
});
