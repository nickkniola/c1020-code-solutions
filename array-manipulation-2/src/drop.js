/* eslint-disable no-unused-vars */

function drop(array, count) {
  var wordsArray = [];

  for (var i = count; i < array.length; i++) {
    wordsArray.push(array[i]);
  }

  return wordsArray;
}
