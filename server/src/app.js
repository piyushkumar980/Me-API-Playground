const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const config = require('./config');
const { errorHandler } = require('./middleware/error');
const path = require('path');

const healthRoutes = require('./routes/health');
const profileRoutes = require('./routes/profile');
const queryRoutes = require('./routes/query');

const app = express();


app.use(helmet());
app.use(cors({ origin: config.frontendURL }));
app.use(express.json());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Too many requests from this IP, please try again after 15 minutes."
});
app.use(limiter);

app.use('/health', healthRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/query', queryRoutes);


app.use(errorHandler);

app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html'));
});

module.exports = app;
