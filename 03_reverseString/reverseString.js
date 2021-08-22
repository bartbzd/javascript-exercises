const reverseString = function (str) {
  let splitStr = str.split("");
  let reverseArray = splitStr.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

module.exports = reverseString;
