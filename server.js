const inquirer = require("inquirer");
const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
  {
    user: "postgres",
    password: "domo",
    host: "localhost",
    database: "company_db",
  },
  console.log(`Connected to the database.`)
);

pool.connect();

//GET to pull all departments
app.get("/api/departments", (req, res) => {
  const sql = `SELECT id, name AS Department FROM department`;

  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

//GET to pull all roles

//GET to pull all employees

//POST to add a department

//POST to add a role

//POST to add an employee

//PUT to update an employee

//BONUS: Include DELETE statements below if time allows

//Default response for any other request (Error)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
