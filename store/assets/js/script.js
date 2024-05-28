const express = require('express');
const app = express();

const data = require('./data.json');

app.use(express.json());
















app.listen(3000, function(request, response){
  console.log("Server is running")
  })