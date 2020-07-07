'use strict';

const { inputFileType, outputFileType } = require('./config');
const { readFile, writeFile } = require('./common');
const dictionary = require('./dictionary');

const getOutputFileName = inputFileName => inputFileName.replace(inputFileType, outputFileType);

const translate = async file => {
    let source = await readFile(file);
    for (const command in dictionary) {
        const analogCommand = dictionary[command];
        if (analogCommand !== '') {
            const regex = RegExp(`\\b${analogCommand}\\b`, 'g');
            source = source.replace(regex, command);
        }
    }
    const outputFileName = getOutputFileName(file);
    return writeFile(outputFileName, source);
};

module.exports = { translate };
