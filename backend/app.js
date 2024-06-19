const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const pool = mysql.createPool({
  connectionLimit: 10, 
  host: 'localhost',
  user: 'root',
  password: 'Jun@2024',
  database: 'vue_project'
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');


  connection.release();
});


app.post('/api/employers', (req, res) => {
  const { employerid, name, age, role, description } = req.body;

  const sql = 'INSERT INTO Employer (employerid, name, age, role, description) VALUES (?, ?, ?, ?, ?)';
  pool.query(sql, [employerid, name, age, role, description], (err, result) => {
    if (err) {
      console.error('Error adding employer:', err);
      res.status(500).send('Error adding employer');
      return;
    }
    console.log('Employer added successfully');
    res.status(201).send('Employer added successfully');
  });
});


app.get('/api/employers', (req, res) => {
  const sql = 'SELECT * FROM Employer';
  pool.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
