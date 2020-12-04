const express = require('express');
const app = express();
const port = 3000;
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.listen(port, () => {
  process.stdout.write(`Listening at Port: ${port}`);
});

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
