import {
  compress,
  elementAt,
  encode,
  flatten,
  isPalindrome,
  last,
  lastButOne,
  length,
  pack,
  reverse,
} from "./1-10";

describe("01. last", () => {
  it("Should return last element", () => {
    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last(["x", "y", "z"])).toBe("z");
  });

  it("should throw error on empty list", () => {
    expect(() => last([])).toThrow("Empty list");
  });
});

describe("02. lastButOne", () => {
  it("should return last but one element", () => {
    expect(lastButOne([1, 2, 3, 4])).toBe(3);
    expect(lastButOne(["x", "y", "z"])).toBe("y");
  });

  it("should throw error on empty list", () => {
    expect(() => lastButOne([])).toThrow("Empty list");
  });

  it("should throw error on too few items", () => {
    expect(() => lastButOne([1])).toThrow("Too few items");
  });
});

describe("03. elementAt", () => {
  it("should return the element at the given position (non-zero-based)", () => {
    expect(elementAt([1, 2, 3], 2)).toBe(2);
    expect(elementAt(["x", "y", "z"], 3)).toBe("z");
  });

  it("should return undefined if the element doesn't exist", () => {
    expect(elementAt([1, 2, 3], 99)).toBe(undefined);
    expect(elementAt(["x", "y", "z"], -42)).toBe(undefined);
  });
});

describe("04. length", () => {
  it("should return the length of a list", () => {
    expect(length([1, 2, 3, 4])).toBe(4);
    expect(length(["x", "y", "z"])).toBe(3);
  });
});

describe("05. reverse", () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  expect(reverse(["x", "y", "z"])).toEqual(["z", "y", "x"]);
});

describe("06. isPalindrome", () => {
  expect(isPalindrome([1, 2, 1])).toBe(true);
  expect(isPalindrome([1, 1, 1])).toBe(true);
  expect(isPalindrome([1])).toBe(true);
  expect(isPalindrome([1, 2, 3])).toBe(false);
});

describe("07. flatten", () => {
  it("Should flatten a list", () => {
    expect(flatten([1, [2, [3, 4], 5, 6], 7, [8, 9]])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});

describe("08. compress", () => {
  it("Should eliminate consecutive duplicates of list elements", () => {
    expect(compress([1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 7])).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });
});

describe("09. pack", () => {
  it("Should Pack consecutive duplicates of list elements into sublists", () => {
    expect(pack([1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 7])).toEqual([
      [1],
      [2, 2, 2],
      [3, 3],
      [4],
      [5],
      [6, 6, 6, 6, 6, 6, 6],
      [7],
    ]);
  });
});

describe("10. encode", () => {
  it("Should perform run-length encoding on a list", () => {
    expect(encode(["a", "b", "b", "c", "d", "d", "d", "d", "e"])).toEqual([
      [1, "a"],
      [2, "b"],
      [1, "c"],
      [4, "d"],
      [1, "e"],
    ]);
  });
});
