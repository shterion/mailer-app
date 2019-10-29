// process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const request = require('supertest');

const log = require('./../app/utils/logger');
const app = require('./../index.js');
const { emails, populateEmails } = require('./seeds/emails.seed');

chai.use(chaiHttp);

before(populateEmails);

describe('/email - Email creation', () => {
  it('should return 200 and successfully create an email from type "now"', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[0])
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal('NEW');
        expect(res.body.sendType).to.equal('now');
        expect(res.body.repeatType).to.equal('once');
        expect(res.body.text).to.equal('Hi John');
        expect(res.body.recipient[0]).to.equal('johndoe@mail.com');
        expect(res.body.neverEnd).to.equal(false);
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });

  it('should return 200 and successfully create an email from type "later"', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[1])
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal('NEW');
        expect(res.body.sendType).to.equal('later');
        expect(res.body.date).to.equal('2019-10-26T14:27:00.000Z');
        expect(res.body.repeatType).to.equal('once');
        expect(res.body.text).to.equal('Hi Steven');
        expect(res.body.recipient[0]).to.equal('stevenlee@mail.com');
        expect(res.body.neverEnd).to.equal(false);
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });

  it('should return 400 if email is not valid', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[2])
      .then((res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.text).to.equal('Email is not valid');
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });

  it('should return 400 if text is not provided', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[3])
      .then((res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.text).to.equal('Text field is required');
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });

  it('should return 400 if date is not valid', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[4])
      .then((res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.text).to.equal('Date is invalid');
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });

  it('should return 400 because of missing "sendType"', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[5])
      .then((res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.text).to.equal('Send type is required');
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });

  it('should return 400 because of missing "repeatType"', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[6])
      .then((res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.text).to.equal('Repeat type is required');
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });

  it('should return 400 because if days are not provided when type "weekly"', (done) => {
    request(app)
      .post('/api/v1/emails')
      .send(emails[7])
      .then((res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.text).to.equal('Repeat type "weekly" requires array of days');
        done();
      })
      .catch((err) => {
        log.error(err);
        throw err;
      });
  });
});
