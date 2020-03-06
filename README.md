# WWXS-Backend

#### Deployment:

Make sure to create a /db directory on the server.  This is the stateful storage where the Postgres database will live.

To bring up the stack, run:

```docker-compose up -d```

To redeploy the stack after making changes, run:

```docker-compose up -d --force-recreate```

Make sure not to commit any secrets added to the docker-compose.yml file.
