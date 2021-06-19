use cmm_proj;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int NOT NULL,
  PRIMARY KEY (id)
  );

DROP TABLE IF EXISTS customers;
CREATE TABLE customers(
	id int NOT NULL,
    name text,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
	id int NOT NULL,
    customer_id int,
    name text,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers (id)
);

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
	id int NOT NULL,
    description text,
    project_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (project_id) REFERENCES projects (id)
);

DROP TABLE IF EXISTS task_logs;
CREATE TABLE task_logs (
	id int NOT NULL,
    task_id int,
    user_id int,
    duration_minutes int,
    PRIMARY KEY (id),
    FOREIGN KEY (task_id) REFERENCES tasks (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO users (id)
VALUES
  (1),
  (2),
  (3),
  (4),
  (5);
  
INSERT INTO customers (id, name)
VALUES
  (1, 'Charlotte'),
  (2, 'Herman'),
  (3, 'Cervantes'),
  (4, 'Oscar'),
  (5, 'Mary');
  
INSERT INTO projects (id, customer_id, name)
VALUES
  (1, 1, 'JEyre'),
  (2, 2, 'MobyD'),
  (3, 3, 'Quixote'),
  (4, 4, 'DorianG'),
  (5, 5, 'FStein');
  
INSERT INTO tasks (id, description, project_id)
VALUES
  (1, 'task numero uno', 1),
  (2, 'second task', 2),
  (3, 'task number three', 3),
  (4, 'four???', 4),
  (5, 'fifth task', 5);
  
INSERT INTO task_logs (id, task_id, user_id, duration_minutes)
VALUES
  (1, 1, 1, 5),
  (2, 2, 2, 10),
  (3, 3, 3, 15),
  (4, 4, 4, 20),
  (5, 5, 5, 25);