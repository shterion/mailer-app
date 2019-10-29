/**
 * @desc Input validation
 *
 * @param {Object} data - email content
 * @return {Boolean} - if input is valid
 */

const isEmpty = data => data === undefined
    || data === null
    || (typeof data === 'object' && Object.keys(data).length === 0)
    || (typeof data === 'string' && data.trim().length === 0);

module.exports = isEmpty;
