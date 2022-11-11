import {
  decode,
  dropEvery,
  dupli,
  encodeDirect,
  encodeModified,
  removeAt,
  repli,
  rotate,
  slice,
  split,
} from "./11-20";

describe("11. encodeModified", () => {
  it("Should perform run-length encoding of a list where singular items don't have a count", () => {
    expect(
      encodeModified(["a", "b", "b", "c", "d", "d", "d", "d", "e"])
    ).toEqual(["a", [2, "b"], "c", [4, "d"], "e"]);
  });
});

describe("12. decode", () => {
  it("Should decode a run-length encoded list", () => {
    expect(decode(["a", [2, "b"], [4, "c"], "d"])).toEqual([
      "a",
      "b",
      "b",
      "c",
      "c",
      "c",
      "c",
      "d",
    ]);
  });
});

describe("13. encodeDirect", () => {
  it("Should perform run-length encoding of a list where singular items don't have a count", () => {
    expect(encodeDirect(["a", "b", "b", "c", "d", "d", "d", "d", "e"])).toEqual(
      ["a", [2, "b"], "c", [4, "d"], "e"]
    );
  });
});

describe("14. dupli", () => {
  it("should duplicate items of a list.", () => {
    expect(dupli([1, 2, 3, 4])).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
  });
});

describe("15. repli", () => {
  it("should replicate the items of a list a given number of times", () => {
    expect(repli([1, 2, 3], 3)).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
  });
});

describe("16. dropEvery", () => {
  it("should drop every nth item", () => {
    expect(dropEvery([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
      1, 2, 4, 5, 7, 8,
    ]);
  });
});

describe("17. split", () => {
  it("should split a list where the length of the first part is given", () => {
    expect(split([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ]);
  });
});

describe("18. slice", () => {
  it("should produce a slice of a list given a start and end", () => {
    expect(slice([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 7)).toEqual([3, 4, 5, 6, 7]);
  });
});

describe("19. rotate", () => {
  it("should rotate a list by a given number of positions", () => {
    expect(rotate([], 2)).toEqual([]);
    expect(rotate([1, 2, 3, 4, 5, 6], 0)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(rotate([1, 2, 3, 4, 5, 6], 2)).toEqual([5, 6, 1, 2, 3, 4]);
    expect(rotate([1, 2, 3, 4, 5, 6], -2)).toEqual([3, 4, 5, 6, 1, 2]);
    expect(rotate([1, 2, 3, 4, 5, 6], 8)).toEqual([5, 6, 1, 2, 3, 4]);
  });
});

describe("20. removeAt", () => {
  it("should remove the element at a given position in a list (non-zero-based)", () => {
    expect(removeAt([1, 2, 3, 4], 2)).toEqual([1, 3, 4]);
    expect(removeAt(["a", "b", "c", "d"], 3)).toEqual(["a", "b", "d"]);
  });
});
