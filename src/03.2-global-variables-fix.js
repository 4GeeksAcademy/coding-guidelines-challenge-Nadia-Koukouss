function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

const result = (add(5, 10));
console.log(result);
const accumulateFun = add(result, 6)
const subtractFun = subtract(accumulateFun, 12);
console.log(subtractFun);

