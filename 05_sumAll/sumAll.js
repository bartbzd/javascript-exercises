const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    return "ERROR";
  }
  if (num1 > num2) {
    //rearranage num1 and num2
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let sum = 0;
  for (let i = num1; i < num2 + 1; i++) {
    sum += i;
  }
  return sum;
};

// Example solution
const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
