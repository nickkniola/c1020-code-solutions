/* eslint-disable no-unused-vars */

function getValues(object) {
  var valuesArray = [];

  for (var key in object) {
    var value = object[key];
    valuesArray.push(value);
  }

  return valuesArray;
}
