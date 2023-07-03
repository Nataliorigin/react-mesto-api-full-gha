const allowedCors = [
  'http://nataliorigin.nomoredomains.rocks',
  'https://nataliorigin.nomoredomains.rocks',
  'http://localhost:3000',
  'https://localhost:3000',
  'http://158.160.23.108',
  'https://158.160.23.108',
  'http://api.nataliorigin.nomoredomains.rocks',
  'https://api.nataliorigin.nomoredomains.rocks',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  res.header('Access-Control-Allow-Credentials', true);

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  return next();
};
