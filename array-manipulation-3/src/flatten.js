/* eslint-disable no-unused-vars */
function flatten(array) {
  var newArray = [];
  // test to see if outer array is empty
  if (array.length < 1) {
    return array;
  }
  // loop through outer array
  for (var i = 0; i < array.length; i++) {
    if (!(typeof array[i] === 'object')) {
      newArray.push(array[i]);
    }
    // loop through inner arrays
    for (var j = 0; j < array[i].length; j++) {
      // push elements from these inner arrays into a new array
      newArray.push(array[i][j]);
    }
  }
  // return new array
  return newArray;
}
