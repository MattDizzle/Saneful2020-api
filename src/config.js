module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/saneful',
  JWT_SECRET: process.env.JWT_SECRET || '106816c9-bcb5-4a05-9d51-4dda16a357c3',
};
