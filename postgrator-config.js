require('dotenv').config();

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'connectionString': (process.env.NODE_ENV === 'production') 
  ? process.env.PROD_DATABASE_URL
  : process.env.LOCAL_DATABASE_URL,
};