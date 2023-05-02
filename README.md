## How is this not illegal

This beautiful tweet by Dan Abramov [brought to life](https://github.com/rauchg/how-is-this-not-illegal/blob/main/app/page.js#L5).

<a href="https://twitter.com/dan_abramov/status/1341217154566402050" target="_blank"><img width="450" alt="Dan Abramov's tweet jokingly suggesting querying Postgres directly from a React component should be illegal" src="https://user-images.githubusercontent.com/13041/235498259-55fc5ce9-ddc4-4c20-a3bf-22b9978cdfd5.png" /></a>

## Setting it up

1. Create a Vercel Postgres database and link it to your project
2. Go to its settings and copy the `psql` command
3. Add `-f sql/init.sql` like so to populate the database with some data:
   ```sh
   psql "postgres://{user}:{password}@{name}.{location}.postgres.vercel-storage.com:5432/verceldb" -f init.sql
   ```
