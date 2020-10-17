/* eslint-disable no-unused-vars */

function takeRight(array, count) {
  var rightArray = [];

  if (array.length < 1) {
    return rightArray;
  }

  for (var i = array.length - count; i < array.length; i++) {
    rightArray.push(array[i]);
  }

  return rightArray;
}
