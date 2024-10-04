const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Ping! Pong! 🏓🏓');
});

app.listen(port, '127.0.0.1', () => {
  console.log('Server running on port 3000');
});