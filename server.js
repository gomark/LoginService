var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server startedd on: ' + port);

app.get("/url", (req, res, next) => {
  console.log("1")
  res.json(["Tony Stark--","Lisa","Michael","Ginger","Food"]);
});