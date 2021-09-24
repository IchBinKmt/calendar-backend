var isValid = require('date-fns/isValid');

const isDate = (value) => {
    if (!value) {
        return false;
    }

    if (isValid(value)) {
        return true;
    } else {
        return false;
    }
};

module.exports = { isDate };
