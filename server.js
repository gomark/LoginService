var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server startedd on: ' + port);

app.get('/', (req, res) => {
  res
    .status(200)
    .send('OK')
    .end();
});

app.get('/cache', (req, res) => {
  res
    .set("Cache-Control", "public; max-age=360")
    .status(200)
    .send('OK, cache #3')
    .end();
});

app.get('/no-cache', (req, res) => {
  res
    .set("Cache-Control", "no-cache")
    .status(200)
    .send('OK. no-cache #2')
    .end();
});

app.get("/loginService", (req, res, next) => {
  console.log("DEBUG (1)");
  console.log("INFO (2)");
  const URL_SERVICE1 = process.env.URL_SERVICE1;
  const URL_SERVICE2 = process.env.URL_SERVICE2;
  res.json([URL_SERVICE1, "Putti-Lisa-xxxyy", "Michael", URL_SERVICE2, req.query.userId]);
});

app.post('/test-post', (req, res) => {
  var len = 0;
  req.on('data', chunk => {
    console.log(`${chunk}`);
    len += len
  })

  req.on('end', () => {
    console.log("== end ==");
  })  

  /*
  res
    .status(200)
    .send('Received your post, thanks.')
    .end();
  */
});