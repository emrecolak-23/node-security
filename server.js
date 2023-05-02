const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');
const helmet = require('helmet');

const PORT = 3000;

const app = express();

app.use(helmet());

app.get('/secret', (req, res) => {
  return res.send('Your personel secret value is 42!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const certificate = {
  cert: fs.readFileSync('cert.pem'),
  key: fs.readFileSync('key.pem'),
};

https.createServer(certificate, app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
