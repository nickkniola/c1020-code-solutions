/* eslint-disable no-unused-vars */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    var javascript = word.slice(0, 1).toUpperCase() + word.slice(1, 4).toLowerCase() + word.slice(4, 5).toUpperCase() + word.slice(5).toLowerCase();
    return javascript;
  }

  var capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  return capitalizedWord;
}
