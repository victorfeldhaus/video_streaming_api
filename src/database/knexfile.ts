import Knex from 'knex';

const config: { [key: string]: Knex.Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: "12345",
      database: "video"
    },
    migrations: {
      directory: "./migrations"
    }
  }
};

export default config;
