import { encode } from "./1-10";

// 11. Modified run-length encoding.
//     Modify the result of problem 10 in such a way that if an element has no duplicates it is simply copied into the result list.
//     Only elements with duplicates are transferred as (N E) lists.
export const encodeModified = <T>(xs: T[]): Array<[number, T] | T> => {
  return encode(xs).map(([n, x]) => {
    return n === 1 ? x : [n, x];
  });
};

// 12. Decode a run-length encoded list.
//     Given a run-length code list generated as specified in problem 11.
//     Construct its uncompressed version.
export const decode = <T>(xs: Array<T | [number, T]>): T[] => {
  return xs.reduce((acc: T[], x) => {
    if (Array.isArray(x)) {
      return [...acc, ...new Array(x[0]).fill(x[1])];
    } else {
      return [...acc, x];
    }
  }, []);
};

// 13. Run-length encoding of a list (direct solution).
//     Implement the so-called run-length encoding data compression method directly.
//     I.e. don't explicitly create the sublists containing the duplicates, as in problem 9, but only count them.
//     As in problem P11, simplify the result list by replacing the singleton lists (1 X) by X.
export const encodeDirect = <T>(xs: T[]): Array<T | [number, T]> => {
  return xs.reduce((acc: Array<T | [number, T]>, x) => {
    if (acc.length === 0) {
      return [x];
    }

    const rest = acc.slice(0, -1);
    const prev = acc[acc.length - 1];
    const [prevLength, prevItem] = Array.isArray(prev) ? prev : [1, prev];

    if (x === prevItem) {
      return [...rest, [prevLength + 1, prevItem]];
    } else {
      return [...rest, prev, x];
    }
  }, []);
};

// 14. Duplicate the elements of a list.
export const dupli = <T>(xs: T[]): T[] => {
  return xs.reduce((acc: T[], x) => [...acc, x, x], []);
};

// 15. Replicate the elements of a list a given number of times.
export const repli = <T>(xs: T[], n: number): T[] => {
  return xs.reduce((acc: T[], x) => {
    return [...acc, ...new Array(n).fill(x)];
  }, []);
};

// 16. Drop every N'th element from a list.
export const dropEvery = <T>(xs: T[], nth: number): T[] => {
  return xs.reduce((acc: T[], x, i) => {
    if ((i + 1) % nth === 0) {
      return [...acc];
    } else {
      return [...acc, x];
    }
  }, []);
};

// 17. Split a list into two parts; the length of the first part is given.
export const split = <T>(xs: T[], len: number): [T[], T[]] => {
  return xs.reduce(
    (acc: [T[], T[]], x) => {
      if (acc[0].length >= len) {
        return [acc[0], [...acc[1], x]];
      } else {
        return [[...acc[0], x], acc[1]];
      }
    },
    [[], []]
  );
};

// 18. Extract a slice from a list.
// Given two indices, i and k, the slice is the list containing the elements between the i'th and k'th element of the original list (both limits included).
// Start counting the elements with 1.
export const slice = <T>(xs: T[], start: number, end: number): T[] => {
  return xs.reduce((acc: T[], x, i) => {
    if (i + 1 >= start && i + 1 <= end) {
      return [...acc, x];
    } else {
      return [...acc];
    }
  }, []);
};

// 19. Rotate a list N places to the left.
export const rotate = <T>(xs: T[], r: number): T[] => {
  const n = r % xs.length;

  if (n > 0) {
    return [...xs.slice(xs.length - n), ...xs.slice(0, xs.length - n)];
  } else if (n < 0) {
    return [...xs.slice(-n), ...xs.slice(0, -n)];
  } else {
    return xs;
  }
};

// 20. Remove the K'th element from a list where K starts at 1.
export const removeAt = <T>(xs: T[], n: number): T[] => {
  return [...xs.slice(0, n - 1), ...xs.slice(n)];
};
