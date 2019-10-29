let mongoURI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds335678.mlab.com:35678/mailer`;

if (process.env.NODE_ENV === 'test') {
  mongoURI = 'mongodb://localhost:27017/mailer';
}

module.exports = {
  mongoURI,
};
