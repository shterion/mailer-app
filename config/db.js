const config = require('config');
const mongoose = require('mongoose');

const db = config.get('mongoURI');
const log = require('../app/utils/logger');

// MongoDB Configuration
const mongoOptions = {
  keepAlive: true,
  useCreateIndex: true,
  connectTimeoutMS: 30000,
  reconnectInterval: 1000,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true,
  autoReconnect: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  mongoose.connect(db, mongoOptions)
    .then(() => log.info('MongoDB connected...'))
    .catch(err => log.error(err));
};
