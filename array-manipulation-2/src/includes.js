/* eslint-disable no-unused-vars */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element === value) {
      return true;
    }
  }
  return false;
}
