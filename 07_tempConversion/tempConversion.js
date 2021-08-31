const ftoc = function (ftemp) {
  let ctemp = 0
  ctemp = (ftemp - 32) * (5 / 9)
  return Math.round(ctemp * 10) / 10
}

const ctof = function (ctemp) {
  let ftemp = 0
  ftemp = ctemp * (9 / 5) + 32
  return Math.round(ftemp * 10) / 10
}

module.exports = {
  ftoc,
  ctof,
}
