const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.write('Server responded');
});

server.listen(3000, 'localhost', () => {
  console.log('listtening for request on 3000 port');
});
