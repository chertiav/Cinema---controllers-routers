const {Pool} = require('pg');

const pool = new Pool({
	user:'postgres',
	password:'qwerty',
	host: 'localhost',
	port: 5432,
	database: 'cinema-one'
});

module.exports = pool;