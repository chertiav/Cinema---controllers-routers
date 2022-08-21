// const fs = require('fs');
// const os = require('os');
// const http =  require('http');
// const summ = require('./testModule');
// app.use((req, res, next) => {
// 	console.log(`1_Middleware`);
// 	next();
// })
// app.use('/about', (req, res, next) => {
// 	console.log(summ(15,2));
// 	// res.send(`${summ(15,2)}`);
// 	next();
// })

// app.get('/', (req,res) => {
// 	console.log(`home`);
// 	res.send('Hi everybody on home page')
// })
// app.get('/about', (req,res) => {
// 	console.log(`about`);
// 	res.send('Hi everybody on about page')
// })
// app.get('/contact', (req,res) => {
// 	console.log(`contact`);
// 	res.send('Hi everybody on contact page')
// })

//?
require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
const movieRoters = require('./routers/movieRouters')

app.use('/api', movieRoters)
app.listen(port, () => console.log(`Server is started at ${port}`))



// const {getTime, showTime} = require('./middleware');
// app.use(getTime)
// app.use(showTime)
// app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use('/about', function (req,res) {
	// res.redirect("contact")
// })
// app.use("/about", function (req,res) {
// 	console.log(req.query);
// 	const id = req.query.id;
// 	const codes = req.query.code;
// 	// res.send(`id: ${id}`)
// 	let resHTML = '<ul>'
// 	codes.forEach(i => {
// 		resHTML += `<li>${i}</li>`
// 	})
// 	res.send(resHTML)
// })

// app.get('/download', (req, res) => {
// 	res.download(path.join(__dirname, '..', 'public', 'about.html'))
// })
// app.get('/movie*', (req, res) => {
// 	res.send(`List of movies`)
// })

// cut+ing (t неизвстно сколько м.б.)
// cutt?ing (t может быть может не быть)

// app.get('/', (req,res) => {
// 	// res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
// 	res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
// })
// app.get('/about', (req,res) => {
// 	res.sendFile(path.resolve(__dirname, '..', 'public', 'about.html'))
// })
