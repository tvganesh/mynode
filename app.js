
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , posts = require('./routes/posts')
  , userlist = require('./routes/userlist')
  , newuser = require('./routes/newuser')
  , http = require('http')
  , path = require('path');

var mongodb = require('mongodb');


var MongoClient = mongodb.MongoClient;


var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(err) {
    console.log("failed to connect to the database");
  } else {
    console.log("connected to database");
  }

}); 

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/helloworld', routes.index);
app.get('/posts', posts.list);
app.get('/userlist', userlist.list);
app.get('/newuser', newuser.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
