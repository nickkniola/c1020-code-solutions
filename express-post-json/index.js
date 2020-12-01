const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.use(express.json()); // JSON request body parsing (to object) middleware

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  grades.push(req.body);
  grades[grades.length - 1].id = nextId;
  nextId++;
  res.status(201).json(grades[grades.length - 1]);
});

app.listen(3000, () => {
  process.stdout.write('Server Running on Port 3000');
});
