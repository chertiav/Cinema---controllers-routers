// const fs = require('fs');
// const os = require('os');
// const path = require('path');
const http =  require('http');

const host = '127.0.0.1';
const port = 5000;
const server = http.createServer((req, res) => {

	console.log('HEADERS', req.headers);
	console.log('URL', req.url);
	console.log('METHOD', req.method);

	res.statusCode = 200;
	res.setHeader('UserId', 10);
	res.setHeader('Content-Type', 'text/html, charset=utf-8');
	res.write('<h1>We will rock you</h1>');
	res.end();
})
//запуск сервера:
server.listen(port, host, ()=>{
	console.log(`Server has been started at ${host}:${port}`)
})