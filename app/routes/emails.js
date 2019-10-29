const express = require('express');

const router = express.Router();
const log = require('./../utils/logger');
const Email = require('./../models/email');
const validate = require('../utils/validator');

const appName = `${process.env.APPLICATION_NAME}`;

/**
 * @desc POST api/v1/emails - Create an email
 *
 * @return {Object} - newEmail and errors objects
 */
router.post('/', async (req, res) => {
  const {
    errors,
    isValid,
  } = validate(req.body);
  let newEmail;


  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = {
    appName,
    recipient: req.body.recipient,
    text: req.body.text,
    date: req.body.date,
    sendType: req.body.sendType,
    repeatType: req.body.repeatType,
    repeatCount: req.body.repeatCount,
    repeatAt: req.body.repeatAt,
    neverEnd: req.body.neverEnd,
    endOn: req.body.endOn,
    endAfterOccurrences: req.body.endAfterOccurrences,
  };

  try {
    newEmail = await new Email(email).save();
    res.json(newEmail);
  } catch (e) {
    log.error(e);
  }
  return { newEmail, errors };
});

module.exports = router;
