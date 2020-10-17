/* eslint-disable no-unused-vars */

function isLowerCased(word) {
/* create lowercased version of word */
  var lowercasedWord = word.toLowerCase();
  /* loop 'word', seeing if each char of word matches lowercased word, if not return false */
  for (let i = 0; i < word.length; i++) {
    var originalChar = word[i];
    var lowercasedChar = lowercasedWord[i];

    if (originalChar !== lowercasedChar) {
      return false;
    }
  }

  return true;
}
