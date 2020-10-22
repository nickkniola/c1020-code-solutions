/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  secondString = secondString.replaceAll(' ', '');

  for (var i = 0; i < secondString.length; i++) {
    var secondStringChar = secondString[i];

    if (!firstString.includes(secondStringChar)) {
      return false;
    } else {
      firstString = firstString.replace(secondStringChar, '');
      secondString = secondString.replace(secondStringChar, '');
    }
  }
  return true;
}

/* console.log(isAnagram('ludicrous', 'ridiculous')); */
