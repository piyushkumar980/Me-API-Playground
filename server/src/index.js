const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const app = require('./app');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const config = require('./config');

const startServer = async () => {
    try {
        await mongoose.connect(config.mongoURI);
        logger.info('MongoDB connected successfully.');

        app.listen(config.port, () => {
            logger.info(`Server listening on port ${config.port}`);
        });
    } catch (err) {
        logger.error(`Failed to connect to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

startServer();
