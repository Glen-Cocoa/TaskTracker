# TASK TRACKER

## BACK END

- [x] configure db with schema
- [x] configure connection to db
- [x] seed db
- [x] implement user login & auth

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

### TODO
[ ] implement edit fields
[x] implement search for related
[ ] require login to view page
[ ] validate input
[ ] refactor client API util for dryness

#### READ
  - [x] customer
    - [x] display name
    - [x] show related projects

  - [x] project
    - [x] display project name
    - [x] display related customer
    - [x] display related tasks
      - [x] show task id
      - [x] each task show task_logs

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
  - [x] customer
    - [x] input name

  - [ ] project
    - [x] input name
    - [ ] select customer who owns
  
  - [ ] task
    - [ ] select project who owns
    - [x] input description

### DELETE
  - [x] delete task
  
  - [x] delete project

  - [x] delete customer