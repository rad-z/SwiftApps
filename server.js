const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
//import testRunExpress from "./shelljs";
const testRunExpress = require("./shelljs");

// console.log that your server is up and running
app.listen(port, () => console.log(`Server listening on port ${port}. App listening on 7777`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  testRunExpress();
});
