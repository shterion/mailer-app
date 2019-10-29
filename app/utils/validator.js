const Validator = require('validator');
const isEmpty = require('./is-empty');

// TODO: add desc
// function validateSendType(data) {
//   const types = ['now', 'later', 'custom'];
//   const errors = {};
//
//   if (!types.includes(data.sendType)) {
//     errors.text = 'Send type not provided or not supported';
//   }
//
//   if (data.sendType === 'now'
//   && (
//     data.repeatType !== 'once'
//   || (data.repeatAt && data.repeatAt.length > 0)
//   || data.endAfterOccurrences > 0
//   || data.neverEnd === 'true'
//   || data.endOn !== ''
//   )) {
//     errors.text = 'Send type "now" expects only repeatType "once" ';
//   }
//
//   if (data.sendType === 'later'
//   && (
//     data.repeatType !== 'once'
//     || (data.repeatAt && data.repeatAt.length > 0)
//     || data.endAfterOccurrences > 0
//     || data.neverEnd === 'true'
//     || Date.now() >= Date.parse(data.endOn)
//   )) {
//     errors.text = 'Send type "later" expects only repeatType "once" and "endOn"
//                    greater than now';
//   }
//   return errors;
// }

/**
 * @desc Email validation
 *
 * @param {Object} data - email content
 * @return {Object} - errors and 'isValid' objects
 */
const validate = (data) => {
  const errors = {};

  const clonedData = Object.assign(data, {});

  clonedData.recipient = !isEmpty(clonedData.recipient) ? clonedData.recipient : '';
  clonedData.text = !isEmpty(clonedData.text) ? clonedData.text : '';
  clonedData.date = !isEmpty(clonedData.date) ? clonedData.date : '';
  clonedData.sendType = !isEmpty(clonedData.sendType) ? clonedData.sendType : '';
  clonedData.repeatType = !isEmpty(clonedData.repeatType) ? clonedData.repeatType : '';

  if (!Validator.isEmail(clonedData.recipient)) {
    errors.text = 'Email is not valid';
  }

  if (Validator.isEmpty(clonedData.text)) {
    errors.text = 'Text field is required';
  }

  if (!Validator.isISO8601(clonedData.date)) {
    errors.text = 'Date is invalid';
  }

  if (Validator.isEmpty(clonedData.sendType)) {
    errors.text = 'Send type is required';
  }

  if (Validator.isEmpty(clonedData.repeatType)) {
    errors.text = 'Repeat type is required';
  }

  if ((data.repeatType === 'weekly' && !data.repeatAt) || (data.repeatType === 'weekly' && data.repeatAt.length === 0)) {
    errors.text = 'Repeat type "weekly" requires array of days';
  }

  // errors = validateSendType(clonedData);

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
module.exports = validate;
