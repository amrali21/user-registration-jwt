const express = require('express')
const router = express.Router();
const auth = require('../authRoute').auth;
const controller = require('../../controller/users/welcome')
  
//console.log('imported: ' , auth);

router.get('/welcome', auth , controller.welcomeController)

  
 
  module.exports = router;