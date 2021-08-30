const leapYears = require("./leapYears")

describe("leapYears", () => {
  test("works with non century years, 1996 to be true", () => {
    expect(leapYears(1996)).toBe(true)
  })
  test("works with non century years, 1997 to be false", () => {
    expect(leapYears(1997)).toBe(false)
  })
  test("works with ridiculous years, 34992 to be true", () => {
    expect(leapYears(34992)).toBe(true)
  })
  test("works with century years, 1900 to false", () => {
    expect(leapYears(1900)).toBe(false)
  })
  test("works with century years, 1600 to be true", () => {
    expect(leapYears(1600)).toBe(true)
  })
  test("works with century years, 700 to be false", () => {
    expect(leapYears(700)).toBe(false)
  })
})
