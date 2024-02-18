import client from "knex";

import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_SSL,
  DB_NAME,
} from "../../environmentVariables";

export const pgCon = client({
  client: "pg",
  connection: {
    connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    host: DB_HOST,
    port: parseInt(DB_PORT),
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    ssl: DB_SSL ? { rejectUnauthorized: false } : false,
  },
});
