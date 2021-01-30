const connection = require('../../database/db_connection')

const welcomeController = (req, res) => {
     // DONE

        
          var sql = 'SELECT username FROM `users` WHERE user_id = ?'
          connection.query(sql,[req.user_id] ,(err, result) => {
        
            if (err) throw err;
        
            res.render('welcome.ejs', {username: result[0].username})
            console.log('second')
        
        
          })
        
        
        
        
}

module.exports = {welcomeController};