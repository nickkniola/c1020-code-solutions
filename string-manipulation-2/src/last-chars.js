/* eslint-disable no-unused-vars */

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }

  return string.slice(string.length - length);
}
