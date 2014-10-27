# Hacker News Dashboard

> The Hacker News Dashboard is a full-stack web application which utilizes the Hacker News API to provide a dashboard for data analysis and visualization.

## Team

  - __Product Owner__: Will Burgo
  - __Scrum Master__: Adam Back - "If this were a drug deal, Will, I'd have to shoot you in the face. Next time fucking cut a new branch and just check the fucking code goddammit!!!!"
  - __Development Team Members__: Oleg Yanchinskiy, Justin Pinili

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Our project is split into two repositories. (1) Scraper is the code we used to scrape all the data from the HN API and place it into text files. (2) Scheming-Lion is the general repository that structures our site, queries, features, and inserts the data into our MySQL database using the Sequelize ORM. 

## Our tech stack

> Our project uses Angular, Node, a MySql Database for the backend, and the Sequelize ORM.

## Navigating the file structure

* Client - all client facing code. Contains our primary features.
* Server - contains (1) a set of query helper functions for easily using the Database (2) a database folder, which contains our code for inserting new data into our database, and (3) a generic server setup for local development (which you most likely will not use now that we have fully populated the database and have it deployed using Azure)
* Testing - We have some basic testing built out for the front-end code. The backend code is not rigorously tested because that would require read/write access to HN's own database, but we have tested this informally and have confirmed that all datapoints exist.

## Requirements

- Node 0.10.32
- Express ~4.9.0
- MySQL ?
- Angular ~1.2.18
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](https://github.com/Scheming-Lion/Scheming-Lion/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
