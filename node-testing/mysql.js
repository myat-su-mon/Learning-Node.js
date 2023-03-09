var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

conn.connect();

conn.query('INSERT INTO table (id, 1)', function(err, result) {
    console.log(result.insertId);
});

conn.query('SELECT * FROM table', function(err, rows) {
    console.log(rows.length);
});

conn.query('DELETE FROM table WHERE id = 123', function (err, result) { 
    console.log(result.affectedRows);
});

conn.end();