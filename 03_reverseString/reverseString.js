const reverseString = function (str) {
  let splitStr = str.split("")
  let reverseArray = splitStr.reverse()
  let joinArray = reverseArray.join("")
  return joinArray
}

const reverseString2 = function (str) {
  return str.split("").reverse().join("")
}

module.exports = reverseString
