/* eslint-disable no-unused-vars */
/* convert string to array of strings,
loop through the array,
loop through the characters of each string, reversing order, assigning to new variable, push to empty array
 */

function reverseWords(string) {
  var arrayOfStrings = string.split(' ');
  var finalString = '';
  for (var i = 0; i < arrayOfStrings.length; i++) {
    var word = arrayOfStrings[i];
    var newWord = '';
    for (var j = word.length - 1; j >= 0; j--) {
      var letter = word[j];
      newWord += letter;
    }
    finalString = finalString + ' ' + newWord;
  }
  finalString = finalString.replace(' ', '');
  return finalString;
}
