const http = require('http');

const college = require('./sendData');
console.log(college);

http.createServer((req, res)=> {
    res.writeHead(200, {'content-Type':'application/json'});
    
    res.write(JSON.stringify({massage:true, Name:'prashant Vishwakarma', email:'prashant@prashant.com',college:college }));
    res.end();
}).listen(5000);