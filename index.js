const http = require('http')
const mongoose = require('mongoose')

mongoose.connect('mongodb://articleDb:27017/test', { useNewUrlParser: true})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
  //connected
  console.log('Connected')
});

const hostname = '0.0.0.0'
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})