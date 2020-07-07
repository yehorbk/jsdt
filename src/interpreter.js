'use strict';

const dictionary = require('./dictionary');
const { readFile, writeFile } = require('./common');

const getOutputFileName = inputFile => inputFile.replace('.jss', '.js');

const translate = async file => {
    let source = await readFile(file);
    for (const command in dictionary) {
        const analogCommand = dictionary[command];
        if (analogCommand !== '') {
            const regex = RegExp(`\\b${analogCommand}\\b`, 'g');
            source = source.replace(regex, command);
        }
    }
    const output = getOutputFileName(file);
    return writeFile(output, source);
};

module.exports = { translate };
