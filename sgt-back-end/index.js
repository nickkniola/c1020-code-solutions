const express = require('express');
const app = express();
const port = 3000;
const pg = require('pg');
const jsonParse = express.json();
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(jsonParse);

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      const allRows = result.rows;
      res.json(allRows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const values = [name, course, score];
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'Score must be a positive integer between 0 and 100'
    });
  } else if (!name) {
    res.status(400).json({
      error: 'Missing name'
    });
  } else if (!course) {
    res.status(400).json({
      error: 'Missing course'
    });
  } else {
    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      });
  }
});

app.listen(port, () => {
  process.stdout.write(`Listening at Port: ${port}`);
});
