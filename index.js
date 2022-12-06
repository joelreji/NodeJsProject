const http = require('http');
const path = require('path');
const fs = require("fs");
const cors = require('cors')
const { emitWarning } = require('process');




const server = http.createServer((req, res) => {
    console.log(req.url)


    if (req.url == "/") {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            })
    }
    else if (req.url == "/profile.jpg") {
        fs.readFile(path.join(__dirname, 'public', 'profile.jpg'), function (err, content) {
            if (err) throw err;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
            res.end(content);
        });
    }
    else if (req.url == "/api") {
        fs.readFile(path.join(__dirname, 'public', 'db.json'),
            (err, content) => {
                if (err) throw err;
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
                res.writeHead(200, { 'Content-Type': 'application/json', 'mode': 'no-cors' });
                res.end(content, 'utf-8');
            })
    }
    else {
        fs.readFile(path.join(__dirname, 'public', '404.html'),
            (err, content) => {
                if (err) throw err;
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            })
    }


});


const PORT = process.env.PORT || 2020;
server.listen(PORT, () => console.log(`Our server is up and running at ${PORT}`));