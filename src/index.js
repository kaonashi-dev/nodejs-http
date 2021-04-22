const http = require('http');

const user = require('./data/data.json');
const { port } = require('./config');

const server = http.createServer((req, res) => {
    if(req.url === '/api/users'){
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.write(JSON.stringify(user));
        res.end();
    }else{
        res.end();
    }
});

server.listen(port, () => console.log(`Server runing on port ${port}`))