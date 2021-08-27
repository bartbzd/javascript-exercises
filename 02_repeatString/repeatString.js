const repeatString = function (string, number) {
  if (number < 0) return "ERROR"
  let repeatedString = ""
  for (i = 0; i < number; i++) {
    repeatedString += string
  }
  return repeatedString
}

module.exports = repeatString
