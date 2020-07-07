#!/usr/bin/env node

'use strict';

const ArgumentsParser = require('cli-argv-parser');
const { translate } = require('../src/interpreter');

const scheme = {
    file: String,
};

const { file } = ArgumentsParser.parse(process.argv, scheme);
translate(file);
