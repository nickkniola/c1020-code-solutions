var arrayOfBooks = [
  {
    isbn: '1542855829',
    title: 'The Unofficial Harry Potter Spellbook: Wizard Training',
    author: 'Michael Gonzalez'
  },
  {
    isbn: '5829154285',
    title: 'The Second Unofficial Harry Potter Spellbook: Wizard Training',
    author: 'Michael Gonzalez'
  },
  {
    isbn: '5582852914',
    title: 'The Third Unofficial Harry Potter Spellbook: Wizard Training',
    author: 'Michael Gonzalez'
  }
];

console.log('arrayOfBooks:', arrayOfBooks);
console.log('typeof arrayOfBooks:', typeof arrayOfBooks);

var jsonString = JSON.stringify(arrayOfBooks);
console.log('jsonString:', jsonString);
console.log('typeof jsonString:', typeof jsonString);

var manualJSONString = '{"id": 2213, "name": "Bob"}';
console.log('manualJSONString:', manualJSONString);
console.log('typeof manualJSONString:', typeof manualJSONString);

var parsedObject = JSON.parse(manualJSONString);
console.log('parsedObject:', parsedObject);
console.log('typeof parsedObject:', typeof parsedObject);
