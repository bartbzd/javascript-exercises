//declare function with arguments
const removeFromArray = function (arr, ...args) {
  //create variable to capture ...args
  let n;
  //create new array to not change original
  let newArr = arr.slice();
  //loop / increment through array length
  for (let i = 0; i < arr.length; i++) {
    //store returned ...arg index in n
    n = newArr.indexOf(args[i]);
    //ensure n exists and if it does, run code
    if (n > -1) {
      //splice out 1 element from new array, starting at n
      newArr.splice(n, 1);
    }
  }
  //return new array with removed elements
  return newArr;
};

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
module.exports = removeFromArray;
