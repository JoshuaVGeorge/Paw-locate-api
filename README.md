# Paw-locate API

This is the back end server for my paw-locate project. You will need this code to run in the background to beable to access the Paw-locate database and its data from the front end application.

## Installation

### #1 Create the database

You will need mysql install and set up on your computer to continue.
When you are logged into mysql. use the command below to create the database

```bash
  CREATE DATABASE paw_locate;
```

### #2 Create .env file

Use the .env-sample file included in the code (or below) to create a .env file in the project folder.

```bash
    PORT=8080
    DB_HOST=127.0.0.1
    DB_NAME=paw_locate
    DB_USER=<your username>
    DB_PASSWORD=<your password>
    API_URL=http://<your local ipv4 address>:8080
    SECRET_KEY= "generate using console.log(require('crypto').randomBytes(32).toString('hex'))"
```

To find your local ipv4 address please refer to this guide https://www.avg.com/en/signal/find-ip-address

### #3 Install Dependencies

use the below code to install all Dependencies:

```bash
  npm i
```

### #3 Create DB tables

To create the DB tables run the code below:

```bash
  npm run migrate
```

Optionally you can also seed the DB with data using:

```bash
  npm run seed
```

## Deployment

To start the server use:

```bash
  node server.js
```

Optionally if you have nodemon install globally

```bash
  nodemon server
```

if sucessful you can access the API from:

```bash
  http://localhost:8080
```

or

```bash
  http://<you local ipv4 address>:8080
```
