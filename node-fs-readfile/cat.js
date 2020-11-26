const fs = require('fs');
const fileNames = process.argv.splice(2);
let textContent = '';

function filesReader(i = 0) {
  fs.readFile(fileNames[i], 'utf8', (err, data) => {
    if (err) throw err;
    textContent += data + '\n';
    if (i + 1 === fileNames.length) {
      console.log(textContent);
      return;
    }
    return setTimeout(function () { filesReader(i); }, 500, i++);
  });
}
filesReader();
