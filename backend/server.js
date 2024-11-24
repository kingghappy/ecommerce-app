const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Backend!');
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
