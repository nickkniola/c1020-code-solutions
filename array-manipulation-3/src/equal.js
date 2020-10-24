/* eslint-disable no-unused-vars */

function equal(first, second) {
  // loop through first array
  for (var i = 0; i < first.length; i++) {
    // see if element of first array is same as element of second array
    if (!(first[i] === second[i])) {
      return false;
    }
  }
  return true;
}
