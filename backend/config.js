const {
  NODE_ENV,
  JWT_SECRET,
  PORT,
} = process.env;

const config = {
  MONGODB_URI: 'mongodb://127.0.0.1:27017/mestodb',
  PORT: NODE_ENV === 'production' ? PORT : 3000,
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
};

module.exports = config;
