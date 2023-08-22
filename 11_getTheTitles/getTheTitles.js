const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function(arr) {
    let result = arr.map(book=> book.title);
    return result
};
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
