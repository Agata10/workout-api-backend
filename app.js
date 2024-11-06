const express = require('express');
const port = 3000;
//express app
const app = express();

app.listen(port, () => {
  console.log('Server listening on port 300');
});

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
  //res.send('<p>home page</p>');
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

//redirect
app.get('/about-me', (req, res) => {
  // res.send('<p>about page</p>');
  res.redirect('/about');
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
