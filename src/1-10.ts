// 01. Find the last element of a list.
export const last = <T>(xs: T[]): T => {
  if (xs.length < 1) {
    throw new Error("Empty list");
  }

  return xs[xs.length - 1];
};

// 02. Find the last but one element of a list.
export const lastButOne = <T>(xs: T[]): T => {
  if (xs.length < 1) {
    throw new Error("Empty list");
  }

  if (xs.length < 2) {
    throw new Error("Too few items");
  }

  return xs[xs.length - 2];
};

// 03. Find the K'th element of a list.
//     The first element in the list is number 1.
export const elementAt = <T>(xs: T[], i: number): T | undefined => {
  return xs[i - 1];
};

// 04. Find the number of elements of a list.
export const length = (xs: any[]): number => {
  return xs.reduce((acc) => acc + 1, 0);
};

// 05. Reverse a list.
export const reverse = <T>(xs: T[]): T[] => {
  return xs.reduce((acc, x) => [x, ...acc], new Array<T>());
};

// 06. Find out whether a list is a palindrome.
//     A palindrome can be read forward or backward; e.g. (x a m a x).
export const isPalindrome = <T>(xs: T[]): boolean => {
  const reversed = [...xs].reverse();
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
};

type NestedList<T> = Array<T | NestedList<T>>;

// 07. Flatten a nested list structure.
//     Transform a list, possibly holding lists as elements into a `flat' list by replacing each list with its elements (recursively).
export const flatten = <T>(xs: NestedList<T>): T[] => {
  return xs.reduce((acc: T[], x) => {
    if (Array.isArray(x)) {
      return [...acc, ...flatten(x)];
    }

    return [...acc, x];
  }, []);
};

// 08. Eliminate consecutive duplicates of list elements.
//     If a list contains repeated elements they should be replaced with a single copy of the element.
//     The order of the elements should not be changed.
export const compress = <T>(xs: T[]): T[] => {
  return xs.reduce((acc: T[], x) => {
    if (x === acc[acc.length - 1]) {
      return [...acc];
    } else {
      return [...acc, x];
    }
  }, []);
};

// 09. Pack consecutive duplicates of list elements into sublists.
//     If a list contains repeated elements they should be placed in separate sublists.
export const pack = <T>(xs: T[]): Array<T[]> => {
  return xs.reduce((acc: Array<T[]>, x) => {
    if (acc.length === 0) {
      return [[x]];
    }

    const rest = acc.slice(0, -1);
    const prev = acc[acc.length - 1];

    if (x === prev[prev.length - 1]) {
      return [...rest, [...prev, x]];
    } else {
      return [...acc, [x]];
    }
  }, []);
};

// 10. Run-length encoding of a list.
//     Use the result of problem P09 to implement the so-called run-length encoding data compression method.
//     Consecutive duplicates of elements are encoded as lists (N E) where N is the number of duplicates of the element E.
export const encode = <T>(xs: T[]): Array<[number, T]> => {
  return pack(xs).map((ys) => [ys.length, ys[0]]);
};
