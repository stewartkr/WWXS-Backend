# WWXS-Backend

## Overview

This is a prototype of the backend web application for the WWXS project.
This prototype was developed by Kristopher Stewart at Western Washington University
in Winter 2020. Help with Docker configuration was provided by Grant Barton.

The web app was built utilizing Node/Express and Postgres. Resources for recreating
this prototype are attached below.

#### Testing

To launch the server locally, run `npm start` in the root project directory.
By default, the PostgresDB is seeded with test data.

Use `cURL` to test API routes.
Refer to resources below for help with forming and executing `cURL` commands.

#### Deployment:

Make sure to create a /db directory on the server.  This is the stateful storage where the Postgres database will live.

To bring up the stack, run:

```docker-compose up -d```

To redeploy the stack after making changes, run:

```docker-compose up -d --force-recreate```

Make sure not to commit any secrets added to the docker-compose.yml file.

## Resources

#### Dependencies

#### Articles

###### PERN

- https://www.robinwieruch.de/postgresql-express-node-rest-api
- https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66

###### Passport

- https://medium.com/@adamlehrer/get-your-passport-through-security-with-passport-js-bcrypt-c44f70ac7159
- https://blog.cloudboost.io/node-js-authentication-with-passport-4a125f264cd4
