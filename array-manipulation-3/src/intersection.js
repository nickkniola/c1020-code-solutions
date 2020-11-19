/* eslint-disable no-unused-vars */

function intersection(first, second) {
  // create empty array
  var duplicates = [];
  // loop first array
  for (var i = 0; i < first.length; i++) {
  // see if element of first array is in second array
  // if so, push to empty array
    if (second.includes(first[i])) {
      duplicates.push(first[i]);
    }
  }
  // return array
  return duplicates;
}
