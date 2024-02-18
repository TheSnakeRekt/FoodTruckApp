const {
  PORT = 3000,
  REDIS_HOST = '',
  REDIS_PORT = 6379,
  CACHE_EXPIRE_TIME = 60000,
  API_KEY = '',
} = process.env;

export {PORT, REDIS_HOST, REDIS_PORT, CACHE_EXPIRE_TIME, API_KEY};
