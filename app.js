var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Qwert135!',
    database : 'node_mysql'
  });

// SELECT DATA
//   var q = 'SELECT * from users'
//   connection.query(q, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
  
//   });
  
// INSERTING DATA 

//   var q = 'INSERT INTO users (email) VALUES("Yinon@yahoo.com"), ("Batel@gmail.com");'
//   connection.query(q, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);

//   });


//UNSERTING DATA TAKE 2
// var post  = {email: faker.internet.email()};
// var query = connection.query('INSERT INTO users SET ?', post, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });


//INSERT ALOT OF DATA
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();

// function generateAdress(){
//     console.log(faker.address.streetAddress());
//     console.log(faker.address.city());
//     console.log(faker.address.state());
// }
// generateAdress();