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
	    

	    //collection.find({},{},function(e,docs){
	    collection.find().toArray(function(err, items) {
	    	console.log(items);
	        res.render('userlist', {
	            "userlist" : items
	        });
	    });
	    
	   /* collection.find().toArray(function(err, items) {
            res.send(items);
        });*/
	    /*var stream = collection.find().stream();
	    console.log("Printing values...");
	    stream.on("data", function(item) {
	    console.log(item);
	    });

	    stream.on("end", function() {});*/

	    
	});
	 
}; 

