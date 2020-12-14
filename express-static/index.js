const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');

const expressStaticPublicPath = express.static(publicPath);

app.use(expressStaticPublicPath);

app.listen(3000, () => {
  console.log('Listening at Port 3000');
});
