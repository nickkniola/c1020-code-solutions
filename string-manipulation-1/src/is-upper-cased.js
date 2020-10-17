/* eslint-disable no-unused-vars */

function isUpperCased(word) {
  /* create uppercased version of 'word': uppercasedWord */
  var uppercasedWord = word.toUpperCase();

  /* loop through word, comparing each character for strict equality to uppercasedWord */
  for (let i = 0; i < word.length; i++) {
    var originalChar = word[i];
    var uppercasedChar = uppercasedWord[i];
    /* if a character is not strictly equal, change 'wordIsAllUppercased' to false */
    if (originalChar !== uppercasedChar) {
      return false;
    }
  }

  return true;
}
