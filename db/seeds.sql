INSERT INTO department(name)
VALUES ('Sales'),
       ('Customer Service'),
       ('Engineering');

INSERT INTO role(department_id, title, salary)
VALUES (1, 'Sales Lead', '70000.00'),
       (1, 'Sales Representative', '50000.00'),
       (2, 'Customer Service Lead', '45000.00'),
       (2, 'Customer Service Representative', '35000.00'),
       (3, 'Senior Engineer', '100000.00'),
       (3, 'Engineer', '80000.00');

INSERT INTO employee(role_id, first_name, last_name, manager_id)
VALUES (1, 'Muffin', 'Heeler'),
       (2, 'Chloe', 'Dalmatian', 1),
       (3, 'Bingo', 'Heeler'),
       (4, 'Lila', 'Maltese', 3),
       (5, 'Bluey', 'Heeler'),
       (6, 'Mackenzie', 'Border Collie', 5);
