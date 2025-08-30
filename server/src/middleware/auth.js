const config = require('../config');
const logger = require('../utils/logger');

const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === config.apiKey) {
    return next();
  }
  logger.warn('Unauthorized attempt with invalid API key.');
  res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
};

module.exports = { authenticate };