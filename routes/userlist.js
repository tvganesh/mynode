var mongodb = require('mongodb');




/* GET Userlist page. */
exports.list =  function(req, res) {
	 // var db = req.db;
	var MongoClient = mongodb.MongoClient;
	var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	  if(err) {
	    console.log("failed to connect to the database");
	  } else {
	    console.log("connected to database");
	  }
	  
	  console.log("reached");
	    var collection = db.collection('usercollection');
	    console.log("reached1");
	    collection.find({},{},function(e,docs){
	    	console.log(docs);
	        res.render('userlist', {
	            "userlist" : docs
	        });
	    });
	});
	 
}; 

