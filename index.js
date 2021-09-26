const http = require('http')
const mongoose = require('mongoose')
const express = require('express')
const app = express();
const Article = require('./models/articles');
const articleIds = require('./data/articleIds');
const articleRoute = require('./routes/articles')
const hostname = '0.0.0.0'
const port = 8080

//Routes
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});

app.get('/', articleRoute);

//Database connection
mongoose.connect('mongodb://articleDb:27017/articles', { useNewUrlParser: true})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
  //connected
  console.log('Connected')
  articleIds.map((id) => {
    var article = new Article(id);
    article.save(function (err, art){
      if (err) return console.log(err);
      console.log(art.id + " saved to DB")
    })
  });
});
