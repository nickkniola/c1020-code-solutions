/* eslint-disable no-unused-vars */

function compact(array) {
  var truthyArray = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element) {
      truthyArray.push(element);
    }
  }

  return truthyArray;
}
