/* eslint-disable no-unused-vars */

function chunk(array, size) {
  var arrayOfArrays = [];
  var innerArray = [];
  var counter = size;

  if (array.length < 1) {
    return arrayOfArrays;
  }

  for (var i = 0; i <= array.length; i++) {
    if (counter === 0 || i === array.length) {
      arrayOfArrays.push(innerArray);
      counter = size;
      innerArray = [];
    }
    counter--;
    innerArray.push(array[i]);
  }

  return arrayOfArrays;
}
