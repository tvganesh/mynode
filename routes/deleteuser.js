var mongodb = require('mongodb');

/* POST to Add User Service */
exports.list = function(req, res) {
   
    // Set our internal DB variable
    //var db = req.db;
	console.log("Here I ak");
    var MongoClient = mongodb.MongoClient;
	var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	  if(err) {
	    console.log("failed to connect to the database");
	  } else {
	    console.log("connected to database");
	  }
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.collection('usercollection');

    // Submit to the DB
    collection.remove({"username" : userName}    		
    , function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem removing the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /Changeuser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
   });
};
