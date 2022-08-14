// const fs = require('fs');
// const os = require('os');
// const path = require('path');
// const http =  require('http');
const summ = require('./testModule');
const express = require('express');
const port = 5000;
const app = express();

app.use((req, res, next) => {
	console.log(`1_Middleware`);
	next();
})
app.use('/about', (req, res, next) => {
	console.log(summ(15,2));
	// res.send(`${summ(15,2)}`);
	next();
})

app.get('/', (req,res) => {
	console.log(`home`);
	res.send('Hi everybody on home page')
})
app.get('/about', (req,res) => {
	console.log(`about`);
	res.send('Hi everybody on about page')
})
app.get('/contact', (req,res) => {
	console.log(`contact`);
	res.send('Hi everybody on contact page')
})

app.listen(port, () => console.log(`Server is started at ${port}`))