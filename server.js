var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server startedd on: ' + port);

app.get("/loginService", (req, res, next) => {
  console.log("DEBUG (1)");
  console.log("INFO (2)");
  const URL_SERVICE1 = process.env.URL_SERVICE1;
  const URL_SERVICE2 = process.env.URL_SERVICE2;
  res.json([URL_SERVICE1, "Lisa-xx", "Michael", URL_SERVICE2, req.query.userId]);
});