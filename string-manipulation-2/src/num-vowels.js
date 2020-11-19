/* eslint-disable no-unused-vars */
/* create vowelString, create counter set to 0
convert string to lowercase,
loop through string, if letter of string is in vowelString, add 1 to counter,
return counter
 */
function numVowels(string) {
  var vowelString = 'aeiou';
  var lowercaseString = string.toLowerCase();
  var counter = 0;

  for (var i = 0; i < string.length; i++) {
    var letter = lowercaseString[i];
    if (vowelString.includes(letter)) {
      counter++;
    }
  }
  return counter;
}
