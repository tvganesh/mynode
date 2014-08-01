
exports.list = function(req, res){
  res.render('newuser', { title: 'Posts', newuser: newuser });
};