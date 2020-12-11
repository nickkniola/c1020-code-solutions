const fs = require('fs');
const fileNames = process.argv.splice(2);
let textContent = '';

function filesReader(i = 0) {
  fs.readFile(fileNames[i], 'utf8', (err, data) => {
    if (err) throw err;
    textContent += data + '\n';
    if (i + 1 === fileNames.length) {
      process.stdout.write(textContent);
      return;
    }
    return filesReader(++i);
  });
}
filesReader();
