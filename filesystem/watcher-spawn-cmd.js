// How would you pass an arbitrary number of additional parameters fromprocess.argv to the spawned process (e.g., node watcher-spawn-cmd.jstarget.txtls -l -h)?

'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];
const command = process.argv[3];
const flags = process.argv.slice(3);


if (!filename) throw Error('A file to watch must be specified!');

fs.watch(filename, () => {

    let output = '';
    const init = spawn(command, [...flags]);
    init.stdout.on('data', chunk => {
        output += chunk;
        console.log(output);
    });
    init.on('close', () => {
        const parts = output.split(/\s+/);
        console.log(init, process.argv);
    });
});

console.log(`Now watching ${filename} for changes...`);