'use strict';

const fs = require('fs');

const readFile = filePath => new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

const writeFile = (filePath, data) => new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(filePath);
        }
    });
});

module.exports = { readFile, writeFile };
