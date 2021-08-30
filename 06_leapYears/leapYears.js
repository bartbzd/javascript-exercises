const leapYears = function (year) {
  if (year % 100 == 0 && !(year % 400 == 0)) {
    return false
  } else if (year % 4 == 0 || year % 400 == 0) {
    return true
  } else return false
}

module.exports = leapYears

// Shorter example solution
// const leapYears = function(year) {
//   return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
// };

//divisible by 4 and 400 but not 100
// return year % 4 === 0 AND (year % 100 !== 0 OR year % 400 === 0)
// 2000          TRUE                 FALSE                TRUE     = TRUE
// 1985          FALSE                TRUE                 FALSE    = FALSE
//34992         TRUE                 TRUE                FALSE     = TRUE
