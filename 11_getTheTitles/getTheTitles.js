const getTheTitles = (books) => {
  return books.map((book) => `${book.title}`);
};

module.exports = getTheTitles;
