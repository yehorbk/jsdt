#!/usr/bin/env node

'use strict';

const argumentsParser = require('cli-argv-parser');
const { translate } = require('../src/interpreter');

const scheme = {
    file: String,
};

const { file } = argumentsParser.parse(process.argv, scheme);
translate(file);
