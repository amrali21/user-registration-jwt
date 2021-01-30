const express = require('express')
const router = express.Router();
const controller = require('../../controller/users/login')
  
router.get('/login', controller.loginGetController)
router.post('/login', controller.loginPostController)

  
 
  module.exports = router;