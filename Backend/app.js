'use strict';

let http = require('http');
let server = require('./lib/server');

const PORT = process.env.port || 9000;

server.set('port', PORT);
let app = http.createServer(server);

app.listen(PORT, () => {
  console.log('server is start at port ' + PORT);
});
