/* eslint-disable no-unused-vars */

/* times loop should run: array.length - count */

function dropRight(array, count) {
  var newArray = [];

  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
