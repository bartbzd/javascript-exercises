const leapYears = function (year) {
  if (year % 100 == 0 && !(year % 400 == 0)) {
    return false
  } else if (year % 4 == 0 || year % 400 == 0) {
    return true
  } else return false
}

module.exports = leapYears

// - divisible by 4 or 400 but not 100
// - not divisible by 100 unless 400
