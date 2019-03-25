const app = require('../server');
const server = require('http').Server(app);
const port = 3002;

server.listen(port);
console.log(`Running on port ${port}`);