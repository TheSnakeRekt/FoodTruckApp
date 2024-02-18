const {
  PORT = 3000,
  REDIS_HOST = "",
  REDIS_PORT = 6379,
  CACHE_EXPIRE_TIME = 60000,
  API_KEY = "",
  DB_HOST = "localhost",
  DB_PORT = "5432",
  DB_USER = "postgres",
  DB_PASSWORD,
  DB_SSL = false,
  DB_NAME,
} = process.env;

export {
  PORT,
  REDIS_HOST,
  REDIS_PORT,
  CACHE_EXPIRE_TIME,
  API_KEY,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_SSL,
  DB_NAME,
};
