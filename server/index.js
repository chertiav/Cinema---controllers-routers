// const summ = require('./testModule');
// console.log(summ(10,20));

const fs = require('fs');
const os = require('os');
const path = require('path');
// console.log(os.cpus());
// fs.writeFile('test.txt','Good morning', (err) => {
// 	if (err) throw err;
// 	console.log('Writing has been done')
// });
// fs.writeFile('test.txt','Good evening', (err) => {
// 	if (err) throw err;
// 	console.log('Writing has been done')
// });

//!update
	// fs.writeFile('test.txt','Good morning\n', (err) => {
	// 	if (err) throw err;
	// 	console.log('Writing has been done')
	// });
	// fs.appendFile('test.txt','Good evening\n', (err) => {
	// 	if (err) throw err;
	// 	console.log('Writing has been done')
	// });
//!read
	// fs.readFile('test.txt', 'utf8', (err, data) => {
	// 	if (err) throw err;
	// 	console.log('__dirnme', __dirname);
	// 	console.log(data);
	// })
//!delete
	// fs.unlink('test.txt', (err) => {
	// 	if (err) throw err;
	// 	console.log('Deleting has been done');
	// })


//todo работа с каталогами __dirname
fs.readFile('test.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log('__dirnme', __dirname);
	console.log(data);
})
//создание
const newDir = path.join(__dirname, '/public')
fs.mkdir(newDir, (err, data) => {
	if (err) throw err;
});


