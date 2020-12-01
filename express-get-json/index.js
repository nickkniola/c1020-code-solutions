const express = require('express');
const arrOfObj = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Pikachu',
    course: 'Lightning',
    grade: 1001
  }
];
const app = express();

app.get('/api/grades', (req, res) => {
  res.json(arrOfObj);
});

app.listen(3000, () => {
  process.stdout.write('server is listening on port 3000');
});
