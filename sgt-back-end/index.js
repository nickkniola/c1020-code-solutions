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
      res.status(200).json(allRows);
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
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer between 0 and 100'
    });
  } else if (!name) {
    res.status(400).json({
      error: 'Missing or invalid "name"'
    });
  } else if (!course) {
    res.status(400).json({
      error: 'Missing or invalid "course"'
    });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
    const values = [name, course, score];
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

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  if (!name) {
    res.status(400).json({
      error: 'Missing or invalid "name"'
    });
  } else if (!course) {
    res.status(400).json({
      error: 'Missing or invalid "course"'
    });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer between 0 and 100'
    });
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else {
    const sql1 = `
      update "grades"
         set "name" = $1,
             "course" = $2,
             "score" = $3
       where "gradeId" = $4
   returning *;
    `;
    const values = [name, course, score, gradeId];
    db.query(sql1, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `'gradeId' ${gradeId} not found in the database`
          });
        }
        res.status(200).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else {
    const sql = `
      delete from "grades"
       where "gradeId" = $1
   returning *
    `;
    const values = [gradeId];
    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `'gradeId' ${gradeId} not found in the database`
          });
        } else {
          res.status(204).json();
        }
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
