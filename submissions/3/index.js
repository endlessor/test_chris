function add(a, b) {
  if (a && b) return a + b;
  if (a && !b) {
    return function add1(c) {
      return a + c;
    };
  }
}

console.log(add(4, 6));
console.log(add(4)(6));
