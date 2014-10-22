# Lionbase

> Lionbase stores Hacker News items such as stories, comments, polls, poll options, and jobs, and users.

## Team
Developed by Adam B., Will B., Justin P., and Oleg Y.

## Technology
This MySQL database was created with the help of Sequelize and hosted on Azure with maintenance services by CloudDB. The team chose a MySQL database because they see relational data as being key to future product features.

## Database Design
The database is sorted into six different tables for each of the data types:
  1. Story
  1. Comment
  1. Job
  1. Poll
  1. Polloption
    * A poll option is a choice that a user can select after the poll asks a question.
  1. User

## Table Schemas
Table Schemas are designed to have columns that match 1-to-1 to the API's own design: https://github.com/HackerNews/API#items .

All tables do not have all columns. For example, the "jobs" type does not have kids because comments are not allowed.