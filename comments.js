// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client. Make sure to handle errors in case the file cannot be read.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');