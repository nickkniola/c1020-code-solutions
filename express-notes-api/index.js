const express = require('express');
const app = express();
const fs = require('fs');

const data = require('./data.json');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
  res.status(200).json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || typeof id !== 'number' || id < 0) {
    res.status(400).json({ error: 'ID is not a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `No note with ID ${id} exists` });
  } else if (id === data.notes[id].id) {
    res.status(200).json(data.notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'Note missing content' });
  } else {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
    const dataToWrite = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataToWrite, 'utf-8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(data.notes[data.nextId - 1]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (typeof id !== 'number' || id < 0 || isNaN(id)) {
    res.status(400).json({ error: 'ID must be a positive number' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `Note with ID ${id} does not exist` });
  } else {
    delete data.notes[id];
    const dataToWrite = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataToWrite, 'utf-8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (typeof id !== 'number' || id < 0 || isNaN(id)) {
    res.status(400).json({ error: 'ID must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'Content is a required field' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `Matching note not found with ID ${id}` });
  } else {
    data.notes[id].content = req.body.content;
    const dataToWrite = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataToWrite, 'utf-8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  process.stdout.write('Express server is listening on port 3000');
});
