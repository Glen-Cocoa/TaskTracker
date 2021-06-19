# TASK TRACKER

## BACK END

- [x] configure db with schema
- [x] configure connection to db
- [x] seed db
- [ ] implement user login & auth

### READ
  - [x] users
    - [x] GET all
    - [x] GET one by id

  - [x] customers
    - [x] GET all
    - [x] GET one by id

  - [x] projects
    - [x] GET all
    - [x] GET one by id
    - [x] GET all by customer_id

  - [x] tasks
    - [x] GET one by id
    - [x] GET all by project_id
    - [x] GET one by id

  - [x] task_logs
    - [x] GET one by id
    - [x] GET all
    - [x] GET by task_id
    - [x] GET by user

### EDIT
  - [x] customers
    - [x] edit customer name
  
  - [x] projects
    - [x] edit project name

  - [x] tasks
    - [x] edit task description

  - [x] task_logs
    - [x] edit duration_minutes

### CREATE
  - [x] customers
    - [x] new by name
  
  - [x] projects
    - [x] new by name
    - [x] require customer_id

  - [x] tasks
    - [x] require project_id
    - [x] add description

  - [x] task_logs
    - [x] new task_log by current user => user_id && task => task_id
    - [x] add duration_minutes

### DELETE
  - [x] tasks
    - [x] task by id & cascade task_logs

  - [x] projects
    - [x] project by id & cascade tasks

  - [x] customers
    - [x] customer by id & cascade projects

## FRONT END

#### READ
  - [ ] customer
    - [ ] display name
    - [ ] show related projects

  - [ ] project
    - [ ] display project name
    - [ ] display related customer
    - [ ] display related tasks
      - [ ] show task id
      - [ ] each task show task_logs

### EDIT
  - [ ] customer
    - [ ] name

  - [ ] project 
    - [ ] name

  - [ ] task
    - [ ] description
  
  - [ ] task_logs
    - [ ] edit duration_minutes

### CREATE
  - [ ] customer
    - [ ] input name

  - [ ] project
    - [ ] input name
    - [ ] select customer who owns
  
  - [ ] task
    - [ ] select project who owns
    - [ ] input description

### DELETE
  - [ ] delete task
  
  - [ ] delete project

  - [ ] delete customer