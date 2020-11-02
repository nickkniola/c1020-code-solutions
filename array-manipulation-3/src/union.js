/* eslint-disable no-unused-vars */

function union(first, second) {
  // create uniqueArray
  var uniqueArray = [];
  // loop first array
  for (var i = 0; i < first.length; i++) {
    // check if uniqueArray already contains element of first array
    // if not, push to uniqueArray
    if (!uniqueArray.includes(first[i])) {
      uniqueArray.push(first[i]);
    }
  }
  // loop second array
  for (var j = 0; j < second.length; j++) {
  // check if uniqueArray already contains element of second array
  // if not, push to uniqueArray
    if (!uniqueArray.includes(second[j])) {
      uniqueArray.push(second[j]);
    }
  }
  // return uniqueArray
  return uniqueArray;
}
