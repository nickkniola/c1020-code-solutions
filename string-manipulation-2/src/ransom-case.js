/* eslint-disable no-unused-vars */
/* loop through string, checking index if it is even/odd, odd is uppercase, even is lowercase */

function ransomCase(string) {
  var ransomString = '';

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];

    if (i % 2 === 0 || i === 0) {
      ransomString += letter.toLowerCase();
    } else {
      ransomString += letter.toUpperCase();
    }
  }
  return ransomString;
}
