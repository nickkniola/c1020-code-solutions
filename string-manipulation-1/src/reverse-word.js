/* eslint-disable no-unused-vars */

function reverseWord(word) {
  var reversedWordArr = '';

  for (var i = word.length - 1; i >= 0; i--) {
    var char = word[i];
    reversedWordArr += char;
  }

  return reversedWordArr;
}
