/* exported includesSeven */

function includesSeven(array) {
  var isSevenInArr = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isSevenInArr = true;
    }
  }
  return isSevenInArr;
}
