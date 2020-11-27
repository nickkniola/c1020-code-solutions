const fs = require('fs');

fs.writeFile('random.txt', (Math.random() * 100).toString(), 'utf8', err => {
  if (err) throw err;
});
