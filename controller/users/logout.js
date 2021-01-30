
const connection = require('../../database/db_connection')
const { base64encode, base64decode } = require('nodejs-base64');

const logoutPostController = (req, res) => {
    // i have the encrypted token in header, now delete it from database.
    const token_header = req.header('cookie')
  
    var encrypted_token = req.cookies.session;  // using cookie-parser middleware.
    var token = JSON.parse(base64decode(encrypted_token)).token
  
    var sql = 'DELETE FROM `tokens` WHERE token = ?'
  
    connection.query(sql,[token] ,(err, result) => { // results is always empty because deleting returns an empty object.
  
      if (err) throw err;
  
      res.redirect('/login')
  
  
    })
  }
  
module.exports = {logoutPostController}