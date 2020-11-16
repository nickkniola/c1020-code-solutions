/* eslint-disable no-unused-vars */
/* convert title into array,
loop through array,

if word is api, then concatenate API

if word is javascript, then concatenate JavaScript

if not index of 0 or follows a ':':
    then return if word is conjunction, article, preposition

making each first letter(word at index of 0) capitalized,
concatenate resulted capitalized word to stringToReturn,
return stringToReturn
*/

function titleCase(title) {
  var arrayOfWords = title.split(' ');
  var stringToReturn = '';
  var arrayOfLowercaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];

    if ((word.toLowerCase().includes('javascript') || word.toLowerCase().includes('api'))) {
      if (i === 0) {
        if (word.toLowerCase() === 'javascript:') {
          stringToReturn += 'JavaScript:';
        } else if (word.toLowerCase() === 'javascript') {
          stringToReturn += 'JavaScript';
        } else if (word.toLowerCase() === 'api') {
          stringToReturn += 'API';
        }
      } else {
        if (word.toLowerCase() === 'javascript:') {
          stringToReturn += ' JavaScript:';
        } else if (word.toLowerCase() === 'javascript') {
          stringToReturn += ' JavaScript';
        } else if (word.toLowerCase() === 'api') {
          stringToReturn += ' API';
        }
      }
      continue;
    }
    if (!(i === 0 || arrayOfWords[i - 1].includes(':'))) {
      if (arrayOfLowercaseWords.includes(word)) {
        if (i !== 0) {
          stringToReturn = stringToReturn + ' ' + word;
        } else {
          stringToReturn = stringToReturn + word;
        }
        continue;
      }
    }

    if (word.includes('-')) {
      var indexOfDash = word.indexOf('-');
      word = word.slice(0, indexOfDash + 1) + word.slice(indexOfDash + 1, indexOfDash + 2).toUpperCase() + word.slice(indexOfDash + 2);
    }

    var capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1);

    if (i !== 0) {
      stringToReturn = stringToReturn + ' ' + capitalizedWord;
    } else {
      stringToReturn += capitalizedWord;
    }
  }
  return stringToReturn;
}
