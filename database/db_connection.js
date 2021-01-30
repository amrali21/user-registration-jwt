const mysql = require('mysql')

var connection;

if(typeof connection === 'undefined'){

connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : 'ecommerce'
});

connection.connect();
}


module.exports = connection;