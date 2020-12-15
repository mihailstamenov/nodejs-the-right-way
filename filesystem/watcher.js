// Watching a file for changes using fs.watch
// and providing a callback to execute on change

'use strict';

const fs = require('fs');
fs.watch('target.txt', () => console.log('File change!'));
console.log('Now watcing target.txt for changes...'); 