

module.exports = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  apiKey: process.env.API_KEY,
  frontendURL: process.env.FRONTEND_URL || 'http://localhost:5173'
};