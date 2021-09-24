const fibonacci = (fib) => {
  let num = parseInt(fib);
  let arr = [1, 1];
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      let result = arr[i] + arr[i + 1];
      arr.push(result);
    }
    let final = arr[num - 1];
    return final;
  } else {
    return "OOPS";
  }
};

//alternate solution
function fibo(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2);
}

//alternate solution 2
const fibo2 = function (count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

(module.exports = fibonacci), fibo, fibo2;

//start with 1 + 1 = num
//
