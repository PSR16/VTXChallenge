const http = require('http')
const mongoose = require('mongoose')
const Article = require('./models/articles');

mongoose.connect('mongodb://articleDb:27017/articles', { useNewUrlParser: true})

var db = mongoose.connection;
const articles = [
  { type: 'pubmed', id: '7683628' },
  { type: 'pubmed', id: '18456578' },
  { type: 'pubmed', id: '20021716' },
  { type: 'pubmed', id: '22658665' },
  { type: 'pubmed', id: '22975760' },
  { type: 'pubmed', id: '23891399' },
  { type: 'pubmed', id: '23974870' },
  { type: 'pubmed', id: '25087612' },
  { type: 'pubmed', id: '27171515' },
  { type: 'pubmed', id: '28546993' },
];

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
  //connected
  console.log('Connected')
  articles.map((id) => {
    var article = new Article(id);
    article.save(function (err, art){
      if (err) return console.log(err);
      console.log(art.id + " saved to DB")
    })
  });
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