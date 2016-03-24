var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

//API
//login
router.routes('/user').post(function(req, res){
  User.find({email: req.body.email}, function(err, user){
    if(err){
      return res.send(err);
    }
    //session/cookie logic
    //response
    res.json(user);
  });
});

//update (auto-save)
router.routes('/user').put(function(req, res){
  User.find({email: current_user().email}, function(err, user){
    if(err){
      return res.send(err);
    }
    //update with props send from redux fetch request
    for(prop in req.body){
      user[prop] = req.body[prop];
    }

    user.save(function(err){
      if(err){
        return res.send(err);
      }

      res.json({message: 'Saved'});
    })
  });
});

module.exports = router;
