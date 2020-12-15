'use strict';

const fs = require('fs');

fs.readFile('target.txt', (err, data) => {
// If for any reason the file can’t be written, then the errparameter will contain an Error object.
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
