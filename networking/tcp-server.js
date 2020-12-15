'use strict';

const
    net = require('net'),
    server = net.createServer(connection => {
        // Use the connection object for data transfer.
    });

server.listen(60300);


// In Node.js, the bind and connect operations are provided by the net module.