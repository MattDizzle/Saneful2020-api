if (process.env.NODE_ENV == "production") {
  module.exports = {
    PORT: process.env.SERVER_PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  };
} else if (process.env.NODE_ENV == "test") {
  module.exports = {
    PORT: process.env.SERVER_PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.LOCAL_DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  };
}
