require('dotenv').config()
// const { Client } = require('pg');

const app = require("./app");
const knex = require("knex");


const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  ssl: true,
  extra: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
})

app.set("db", db);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT}`);
});
