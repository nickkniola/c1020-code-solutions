/* eslint-disable no-unused-vars */

function zip(first, second) {
  var newArray = [];
  // loop through first array
  for (var i = 0; i < first.length; i++) {
    if (!(first[i] && second[i])) {
      return newArray;
    }
    // access element of first/second arrays, adding to newInnerArray
    var firstArrElement = first[i];
    var secondArrElement = second[i];
    var newInnerArray = [firstArrElement, secondArrElement];
    // push newInnerArray to newArray
    newArray.push(newInnerArray);
  }
  // return newArray
  return newArray;
}
