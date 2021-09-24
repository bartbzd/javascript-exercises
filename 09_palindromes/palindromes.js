const palindromes = (words) => {
  let newWord = words.replace(/\W/g, "").toLowerCase();
  let word = newWord.split("");
  let reversed = word.reverse().join("");
  return newWord === reversed;
};

module.exports = palindromes;

//remove non-alphanumeric and change to lower case
//split string into array
//reverse array and join back into string

//'A movie!' ---> 'amovie' = newWord
//'a, m, o, v, i, e'
//'e, i, v, o, m, a' ---> 'eivoma' = reversed
