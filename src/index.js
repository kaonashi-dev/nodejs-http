const http = require('http');

const { port } = require('./config');

const server = http.createServer((req, res) => {
    console.log('hi :)');
});

server.listen(port, () => console.log(`Server runing on port ${port}`))