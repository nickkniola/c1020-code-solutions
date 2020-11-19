/* eslint-disable no-unused-vars */

function isPalindromic(string) {
  var subString = string.replace(' ', '');
  for (var i = 0, j = subString.length - 1; i < j; i++, j--) {
    if (subString[i] !== subString[j]) {
      return false;
    }
  }
  return true;
}
