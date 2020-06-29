'use strict';

const fs = require('fs');

const readFile = async filePath => {
    return new Promise(resolve => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) return err;
            return resolve(data);
        });
    });
};

const writeFile = (filePath, string) => {
    fs.writeFile(filePath, string, (err) => {
        if (err) return err;
    });
};

module.exports = { readFile, writeFile };