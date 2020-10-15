/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var suffixedArray = [];

  for (let i = 0; i < words.length; i++) {
    suffixedArray.push(words[i] + suffix);
  }

  return suffixedArray;
}
