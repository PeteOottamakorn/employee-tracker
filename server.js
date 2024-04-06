const fs = require("fs");
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

//Variable to hold questions for inquirer
const prompts = [
  {
    type: "list",
    name: "choices",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Exit",
    ],
  },
  {
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?",
    when: (answers) => answers.choices === "Add Employee",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?",
    when: (answers) => answers.choices === "Add Employee",
  },
  {
    type: "list",
    name: "employeeRole",
    message: "What is the employee's role?",
    choices: [],
    when: (answers) => answers.choices === "Add Employee",
  },
  {
    type: "list",
    name: "employeeManager",
    message: "Who is the employee's manager?",
    choices: ["No one"],
    when: (answers) => answers.choices === "Add Employee",
  },
  {
    type: "list",
    name: "employeeUpdate",
    message: "Which employee's role is being updated?",
    choices: [],
    when: (answers) => answers.choices === "Update Employee Role",
  },
  {
    type: "list",
    name: "roleUpdate",
    message: "What role are they in now?",
    choices: [],
    when: (answers) => answers.choices === "Update Employee Role",
  },
  {
    type: "input",
    name: "newRole",
    message: "Please enter the new role:",
    when: (answers) => answers.choices === "Add Role",
  },
  {
    type: "input",
    name: "newSalary",
    message: "Please enter the salary for the new role:",
    when: (answers) => answers.choices === "Add Role",
  },
  {
    type: "list",
    name: "roleDepartment",
    message: "Which department will this role fall under?",
    choices: [],
    when: (answers) => answers.choices === "Add Role",
  },
  {
    type: "input",
    name: "newDepartment",
    message: "What is the employee's first name?",
    when: (answers) => answers.choices === "Add Department",
  },
];

//Default response for any other request (Error)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

// Function to initialize app
function init() {
  inquirer.prompt(prompts).then((answers) => {
    // Call routes to update information properly
  });
}

// Function call to initialize app
init();
