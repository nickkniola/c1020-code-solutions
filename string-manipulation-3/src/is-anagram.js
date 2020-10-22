/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  secondString = secondString.replace(' ', '');

  for (var i = 0; i < secondString.length; i++) {
    var secondStringChar = secondString[i];

    if (!firstString.includes(secondStringChar)) {
      return false;
    }
  }
  return true;
}
