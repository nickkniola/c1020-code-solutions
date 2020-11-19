/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (i === firstIndex) {
      letter = string[secondIndex];
    } else if (i === secondIndex) {
      letter = string[firstIndex];
    }
    newString += letter;
  }
  return newString;
}
