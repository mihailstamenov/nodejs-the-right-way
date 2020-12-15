
'use strict';
 
require('fs').createReadStream(process.argv[2])
    .on('data', chunk => process.stdout.write(chunk))
    .on('error', err => process.stderr.write(`ERROR: ${err.message}\n`));

// You can also listen for data events from the file stream instead of calling pipe().

// Here we use process.stdout.write() to echo data, instead of console.log()

// The incoming data chunks already contain any newline characters from the inputfile. 
// We don’t need the extra newline that console.log() would add.

// Conveniently,  the  return  value  of  on()  is  the  same  emitter  object.  We  takeadvantage of this fact to chain our handlers, setting up one right after theother.When working with an EventEmitter, the way to handle errors is to listen forerror events.

// If you don’t listen for error events, but one happensanyway, Node.js will throw an exception. And as we saw before, an uncaughtexception will cause the process to terminate.