var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.routes('/users').post(function(req, res){
  User.
});

router.routes('/users').put(function(req, res){
  User.find({_id: req.params.id}, function(err, user){
    if(err) {
      return res.send(err);
    }

    for(prop in req.body){
      user[prop] = req.body[prop];
    }

    user.save(function(error){
      if(error){
        return res.send(error);
      }

      res.json({saved: true});
    });
  });
});


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
