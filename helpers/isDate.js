const { toDate, parseISO } = require('date-fns');
var isValid = require('date-fns/isValid');

const isDate = (value) => {
    if (!value) {
        return false;
    }

    if (isValid(parseISO(value))) {
        return true;
    } else {
        return false;
    }
};

module.exports = { isDate };
