const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = (arr) => {
  return arr.reduce((a, b) => a * b, 1);
};

const power = (a, b) => {
  return Math.pow(a, b);
};

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num - 1; i > 0; i--) {
      num = num * i;
    }
    return num;
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
