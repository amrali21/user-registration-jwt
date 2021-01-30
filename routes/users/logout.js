const express = require('express')
const router = express.Router();
const controller = require('../../controller/users/logout')

  
router.post('/logout', controller.logoutPostController)

  
 
  module.exports = router;