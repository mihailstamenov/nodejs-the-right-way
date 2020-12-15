'use strict';

const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified!');
}

net.createServer(connection => {
    
    // Reporting.
    console.log('Subscriber connected.');
    connection.write(`Now watching "${filename}" for changes...\n`);

    // Watcher setup.
    const watcher =
        fs.watch(filename, () => connection.write(`File changed: ${new Date()}\n`));
    
    // Cleanup.
    connection.on('close', () => {
        console.log('Subscriber diconnected.');
        watcher.close();
    });
}).listen(60300, () => console.log('Listening for subscribers...'));