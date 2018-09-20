const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello',
  database: 'demoapp'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SHOW DATABASES', (err, result) => {
  if (err) throw err;

  console.log('Data received from Db:\n');
  console.log(result);
});

connection.end();
