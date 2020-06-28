'use strict';

const dictionary = require('./dictionary');

const translate = file => {
    console.log(file, dictionary);
};

module.exports = { translate };
