const repeatString = function (string, number) {
  let repeatedString = "";
  for (i = 0; i < number; i++) {
    repeatedString += string;
  }
  if (number < 0) {
    return "ERROR";
  }
  return repeatedString;
};

module.exports = repeatString;
