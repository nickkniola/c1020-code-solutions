/* eslint-disable no-unused-vars */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  var capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  return capitalizedWord;
}
