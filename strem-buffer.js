// Stream and buffer


const http = require('http');
const fs  = require('fs');

// create a server object:
const server = http.createServer();

// listen for requests:
server.on('request', (req, res) => {

    if (req.url === '/read-file' && req.method === 'GET') {
        

        // streaming file reading
        // const readStream = fs.createReadStream('./text/read.txt');
        const readStream = fs.createReadStream(process.cwd() + '/text/read.txt');

        readStream.on('data', (chunk) => {
            res.write(chunk);
        })

        readStream.on('end', () => {
            res.end('Hello World!');
        })

    }

    // console.log(req.url, req.method);
    // respond to the client:
    // res.end('Hello World!');
});


server.listen(5000, ()=>{
    console.log("server is listening on port 5000");
});




http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

