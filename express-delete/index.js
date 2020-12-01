const express = require('express');
const app = express();

const arrOfObj = [
  {
    id: 1,
    name: 'Bill Gates',
    course: 'Microsoft Word',
    grade: 100
  },
  {
    id: 2,
    name: 'Steve Jobs',
    course: 'User Experience',
    grade: -100
  }
];

app.get('/api/grades', (req, res) => {
  res.json(arrOfObj);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < arrOfObj.length; i++) {
    if (id === arrOfObj[i].id) {
      arrOfObj.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  process.stdout.write('Listening at Port 3000');
});
