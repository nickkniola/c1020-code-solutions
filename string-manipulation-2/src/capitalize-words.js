/* eslint-disable no-unused-vars */
/* divide word by space into an array of words, get first letter of word and make uppercase, get all other letters and make lowercase, convert new array to a new string with spaces */

function capitalizeWords(string) {
  var newString = '';

  const arrayOfWords = string.split(' ');

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

    if (i === arrayOfWords.length - 1) {
      newString += capitalizedWord;
    } else {
      newString += capitalizedWord + ' ';
    }
  }
  return newString;
}
