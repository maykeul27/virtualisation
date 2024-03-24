const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'mysql-service',
  user: 'user',
  password: 'mdp',
  database: 'db_link',
  authPlugin: 'caching_sha2_password'
});

connection.connect();

app.get('/fetch-links', (req, res) => {
  connection.query('SELECT * FROM links', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
