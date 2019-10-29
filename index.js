require('dotenv').config();
require('./config/db')();

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const path = require('path');

// Routes
const emails = require('./app/routes/emails');
const log = require('./app/utils/logger');
const swaggerDocument = require('./app/swagger/swagger.json');

const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, './client/build')));

// CORS Middleware
// app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.options('*', cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
app.use('/api/v1/emails', emails);

app.listen(port, () => log.info(`Server is running on port ${port}`));

module.exports = app;
