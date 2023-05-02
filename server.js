const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.get('/secret', (req, res) => {
  return res.send('Your personel secret value is 42!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
