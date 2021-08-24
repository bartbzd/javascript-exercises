const removeFromArray = function (array, ...n) {
  return n.map((element) => {
    return array.splice(n, 1);
  });
};

const removeFromArray2 = function (array, n) {
  array.splice(n - 1, 1);
  return array;
};

module.exports = removeFromArray;
