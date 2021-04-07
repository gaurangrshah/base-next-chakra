export function limit(arr, c) {
  return arr.filter((x, i) => {
    if (i <= c - 1) {
      return true;
    }
  });
}

export function arrayFill(length, val) {
  return new Array(length).fill(val);
}
