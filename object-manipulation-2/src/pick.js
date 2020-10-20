/* eslint-disable no-unused-vars */

function pick(source, keys) {
  var selectedObject = {};

  for (let i = 0; i < keys.length; i++) {
    var prop = keys[i];
    if (source[prop] || source[prop] === null || source[prop] === 0) {
      selectedObject[prop] = source[prop];
    }
  }

  return selectedObject;
}
