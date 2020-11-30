const fs = require('fs');
const action = process.argv[2];
const notesObj = require('./data.json');

if (action === 'read') {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;
    for (const id in JSON.parse(data).notes) {
      console.log(`${id}: ${JSON.parse(data).notes[id]}`);
    }
  });
} else {
  if (action === 'create') {
    const noteToAdd = process.argv[3];
    notesObj.notes[notesObj.nextId] = noteToAdd;
    notesObj.nextId++;
  } else if (action === 'delete') {
    const numberToDelete = process.argv[3];
    delete notesObj.notes[numberToDelete];
  } else if (action === 'update') {
    const numberToUpdate = process.argv[3];
    const replacementString = process.argv[4];
    notesObj.notes[numberToUpdate] = replacementString;
  }
  const notesString = JSON.stringify(notesObj, null, 2);
  fs.writeFile('data.json', notesString, 'utf-8', err => {
    if (err) throw err;
  });
}
