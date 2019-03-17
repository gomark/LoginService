var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server startedd on: ' + port);

app.get("/url", (req, res, next) => {
    res.json(["Tony Stark Again ...","Lisa","Michael","Ginger","Food"]);
});