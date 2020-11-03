/* eslint-disable no-unused-vars */
function unique(array) {
  // create new array to keep track of oldElements
  var oldElements = [];
  // loop through array, checking if each element is in oldElements
  for (var i = 0; i < array.length; i++) {
    if (!oldElements.includes(array[i])) {
      oldElements.push(array[i]);
    }
  }
  // return oldElements array
  return oldElements;
}
