const http = require('http');

const { port } = require('./config');

const { getUsers, getUser, createUser } = require('./controller/user_controller');

const server = http.createServer((req, res) => {

    if (req.url === '/api/users' && req.method === 'GET') {
        getUsers(req, res);
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        console.log(req.url);
        const id = req.url.split('/')[3];
        getUser(req, res, id);
    } else if (req.url === '/api/users' && req.method === 'POST') {
        createUser(req, res);
    } else {
        res.writeHead(404, { 'Content-type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }

});

server.listen(port, () => console.log(`Server runing on port ${port}`))