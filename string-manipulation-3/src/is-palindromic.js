/* eslint-disable no-unused-vars */

function isPalindromic(string) {
  var subString = string.replace(' ', '');
  for (var i = 0; i < string.length; i++) {
    if (subString.length < 2) {
      return true;
    }
    if (subString[0] === subString[subString.length - 1]) {
      subString = subString.substr(1, subString.length - 2);
    } else {
      return false;
    }
  }
}
