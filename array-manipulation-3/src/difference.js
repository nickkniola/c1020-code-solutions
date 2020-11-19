/* eslint-disable no-unused-vars */

function difference(first, second) {
  // create empty array uniqueArray
  var uniqueArray = [];
  // loop through first array
  for (var i = 0; i < first.length; i++) {
    // have a boolean set to true
    // var isUnique = true;
    // access element of first array
    var firstElement = first[i];
    if (!second.includes(firstElement)) {
      // isUnique = false;
      uniqueArray.push(firstElement);
    }
  }
  // loop through second array
  for (var j = 0; j < second.length; j++) {
    // access element of 2nd array
    var secondElement = second[j];
    // see if elements are the same, if so, set boolean to false
    if (!first.includes(secondElement)) {
      uniqueArray.push(secondElement);
    }
  }
  // return uniqueArray
  return uniqueArray;
}
