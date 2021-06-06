if (process.env.NODE_ENV == "production") {
  module.exports = {
    PORT: process.env.SERVER_PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.PROD_DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    HOST: process.env.PROD_HOST,
    DATABASE: process.env.PROD_DATABASE,
    USER: process.env.PROD_USER,
    PASSWORD: process.env.PROD_PASSWORD,
  };
} else if (process.env.NODE_ENV == "test") {
  module.exports = {
    PORT: process.env.SERVER_PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.LOCAL_DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  };
}
