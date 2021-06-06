if (process.env.NODE_ENV == "production") {
  module.exports = {
    PORT: process.env.SERVER_PORT,
    NODE_ENV: process.env.NODE_ENV || "production",
    DATABASE_URL:
      process.env.PROD_DATABASE_URL ||
      "postgres://dbqmizzfjjcgat:70454ac7626e69a033ef6841d10337802a57d0bcaa48ea01f5a54d6252ec73a6@ec2-52-207-124-89.compute-1.amazonaws.com:5432/dd1lanh0b9e63k",
    JWT_SECRET:
      process.env.JWT_SECRET || "106816c9-bcb5-4a05-9d51-4dda16a357c3",
  };
} else {
  module.exports = {
    PORT: process.env.SERVER_PORT,
    NODE_ENV: process.env.NODE_ENV || "production",
    DATABASE_URL:
      process.env.LOCAL_DATABASE_URL ||
      "postgres://dbqmizzfjjcgat:70454ac7626e69a033ef6841d10337802a57d0bcaa48ea01f5a54d6252ec73a6@ec2-52-207-124-89.compute-1.amazonaws.com:5432/dd1lanh0b9e63k",
    JWT_SECRET:
      process.env.JWT_SECRET || "106816c9-bcb5-4a05-9d51-4dda16a357c3",
  };
}
