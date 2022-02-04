const path = require("path");
const express = require("express");
const app = express(); // create express app

const port = 8000;

// add middlewares
app.use(express.static(path.join(__dirname,'build')));
app.use(express.static("public"));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// start express server on port 8000
app.listen(port, () => {
  console.log(`Web Server app listening... on port ${port}`);
});