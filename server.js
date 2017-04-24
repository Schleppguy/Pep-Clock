var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3000;
mongoose.connect('mongodb://pepuser:pepuser1@ds049496.mlab.com:49496/pepclock');
var PepListItem = require('./models/pepListItem');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

router.get('/pepListItems', function(req, res) {
  PepListItem.find({}, function(error, list){
    res.json(list);
  });
});

app.all('*', function (req, res, next){
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  next();
});
app.use(express.static(__dirname + '/public'));

app.use('/api', router);

app.listen(port, function() {
 console.log(`api running on port ${port}`);
});