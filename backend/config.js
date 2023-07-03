const { PORT = 3000, NODE_ENV, JWT_SECRET } = process.env;

const config = {
  MONGODB_URI: 'mongodb://127.0.0.1:27017/mestodb',
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
  PORT,
};

module.exports = config;
