//var cookieParser = require('cookie-parser');
const { base64encode, base64decode } = require('nodejs-base64');
const jwt = require('jsonwebtoken');
const connection = require('../database/db_connection')


const auth = (req, res, next) => {

  
    try{
        const token_header = req.header('cookie')
        console.log( 'header test, ' , token_header);
        //var encrypted_token = token_header.split(";")[0].replace('session=', '') // this is changed
        var encrypted_token = req.cookies.session;
       // console.log('splitted header, ', req.cookies.session)
        var token = JSON.parse(base64decode(encrypted_token)).token;
        console.log('accessing protected page, authentication token to compare in db: ', token);
        const decoded = jwt.verify(token, process.env.JWT_KEY) // [TARGET]
        var sql = 'SELECT user_id FROM `tokens` WHERE user_id = ? && token = ?'
        
        connection.query(sql,[decoded.user_id, token] ,(err, result) => {
    
          if (err) throw err;
              if(result[0])
          {
            console.log('first')
    
          req.user_id = decoded.user_id;
          next()
    
        }                        // [NEW] this means that a wrong cookie exists (we had logged out)
          else
          {      // here you should redirect.
          res.redirect('/login')
          //res.send('failed to authenticate')
          }
    
        })
        }
    
        catch(e){                           // [NEW] this means no cookie exists (we've never logged in before)
        console.log('accessing protected page, authentication token to compare in db: ', token);
        console.log( e +'caught!!')
          res.redirect('/login')
    
        }
    
    
    } 

    module.exports = {auth};