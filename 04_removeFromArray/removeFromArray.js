const removeFromArray = function (arr, ...args) {
  let n
  let newArr = arr.slice()
  for (let i = 0; i < arr.length; i++) {
    n = newArr.indexOf(args[i])
    if (n > -1) {
      newArr.splice(n, 1)
    }
  }
  return newArr
}

//Example solution
// const removeFromArray = function (array, ...toRemove) {
//   let modifiedArray = array.slice();

//   for (let i = 0; i < array.length; i++) {
//     if (modifiedArray.includes(toRemove[i])) {
//       modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1);
//     }
//   }
//   return modifiedArray;
// };

// Example solution 2 - Simple
// const removeFromArray = function (...args) {
//   const array = args[0]
//   const newArray = []
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item)
//     }
//   })
//   return newArray
// }

// Example solution 3 - Advanced
// const removeFromArray = function (...args) {
//   const array = args[0]
//   return array.filter((val) => !args.includes(val))
// }
module.exports = removeFromArray
