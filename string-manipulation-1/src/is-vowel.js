/* eslint-disable no-unused-vars */

function isVowel(char) {

  var lowercasedVowels = 'aeiou';
  var lowercasedChar = char.toLowerCase();

  if (lowercasedVowels.includes(lowercasedChar)) {
    return true;
  }

  return false;
}
