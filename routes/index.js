
/*
 * GET home page.
 */



exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


/* GET Hello World page. */
exports.index =  function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
};


  
 

