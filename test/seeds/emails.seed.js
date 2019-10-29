const Email = require('./../../app/models/email');

const emails = [{
  recipient: 'johndoe@mail.com',
  text: 'Hi John',
  date: '2019-10-26T14:27:00Z',
  sendType: 'now',
  repeatType: 'once',
},
{
  recipient: 'stevenlee@mail.com',
  text: 'Hi Steven',
  date: '2019-10-26T14:27:00Z',
  sendType: 'later',
  repeatType: 'once',
},
{
  recipient: 'marksmith@mail',
  text: 'Hi mark',
  date: '2019-10-26T14:27:00Z',
  sendType: 'later',
  repeatType: 'once',
},
{
  recipient: 'marksmith@mail',
  date: '2019-10-26T14:27:00Z',
  sendType: 'later',
  repeatType: 'once',
},
{
  recipient: 'marksmith@mail',
  date: '14:27 26-10-2019',
  text: 'Hi mark',
  sendType: 'later',
  repeatType: 'once',
},
{
  recipient: 'marksmith@mail.com',
  text: 'Hi mark',
  date: '2019-10-26T14:27:00Z',
  repeatType: 'once',
},
{
  recipient: 'marksmith@mail.com',
  text: 'Hi mark',
  date: '2019-10-26T14:27:00Z',
  sendType: 'later',
},
{
  recipient: 'stevenlee@mail.com',
  text: 'Hi Steven',
  date: '2019-10-26T14:27:00Z',
  sendType: 'custom',
  repeatType: 'weekly',
},
];

const populateEmails = (done) => {
  try {
    new Email(emails[0]).save();
    new Email(emails[1]).save();
    done();
  } catch (e) {
    console.log('ERROR: ', e);
    throw e;
  }
};

module.exports = {
  emails,
  populateEmails,
};
