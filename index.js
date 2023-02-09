const mongoose = require('mongoose')
const express = require('express')
const app = express();
const Articles = require('./models/articleModel');
const articleIds = require('./data/articleIds');
const articleRoute = require('./routes/articles')
const hostname = '0.0.0.0'
const port = 8080
const url = 'mongodb://articleDb:27017/articles'

//Database connection
mongoose.connect(url, { useNewUrlParser: true})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
  db.dropDatabase()
  //connected
  console.log('Connected to Database')
  articleIds.map((id) => {
    var article = new Articles(id);
    article.save(function (err, art){
      if (err) return console.log(err);
      console.log("Article ID: " + art.id + " saved to DB")
    })
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
  console.log(url)
});

app.use('/articles', articleRoute)