/* eslint-disable no-unused-vars */

function tail(array) {
  var tailArray = [];

  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }

  return tailArray;
}
