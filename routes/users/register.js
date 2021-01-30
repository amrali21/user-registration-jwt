const express = require('express')
const router = express.Router();
const controller = require('../../controller/users/register')

  
router.post('/register', controller.registerPostController)
router.get('/register', controller.registerGetController)
  
 
  module.exports = router;