import { capitalize, reverseString, Calculator, Cesar, analyzeArray } from "./practice";

test("capitalize first letter", () => {
  expect(capitalize("aabbcc")).toBe("Aabbcc");
});

test("reverseString function", () => {
  expect(reverseString("aabbcc")).toBe("ccbbaa");
});

test("Calculator Add", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});
test("Calculator Substract", () => {
  expect(Calculator.subs(3, 2)).toBe(1);
});
test("Calculator Multiply", () => {
  expect(Calculator.multiply(3, 2)).toBe(6);
});
test("Calculator Divide", () => {
  expect(Calculator.divide(4, 2)).toBe(2);
});

test("Cesar Wrapping", () => {
  expect(Cesar("abcz", 1)).toBe("bcda");
});

test("Cesar Case", () => {
  expect(Cesar("abC", 1)).toBe("bcD");
});

test("Cesar Punc", () => {
  expect(Cesar("ab, C", 1)).toBe("bc, D");
});

const result = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

const arr = [1, 8, 3, 4, 2, 6];

test("Array Analyze avg", () => {
  expect(analyzeArray(arr).average).toBe(4);
});

test("Array Analyze min", () => {
  expect(analyzeArray(arr).min).toBe(1);
});

test("Array Analyze max", () => {
  expect(analyzeArray(arr).max).toBe(8);
});

test("Array Analyze length", () => {
  expect(analyzeArray(arr).length).toBe(6);
});
