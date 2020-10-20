/* eslint-disable no-unused-vars */

function omit(source, keys) {
  var notListedObject = {};
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {

    if (!keys.includes(sourceKeys[i])) {
      notListedObject[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
  return notListedObject;
}
