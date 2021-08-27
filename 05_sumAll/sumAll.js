let finalSum = 0;
let bigNum;
let smallNum;
const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    return "ERROR";
  } else if (num1 > num2) {
    bigNum = num1;
    smallNum = num2;
  } else {
    bigNum = num2;
    smallNum = num1;
  }
  for (let i = 0; i < bigNum; i++) {
    finalSum += smallNum;
    smallNum++;
  }
  let sumValue = finalSum;
  finalSum = 0;
  return sumValue;
};

module.exports = sumAll;
