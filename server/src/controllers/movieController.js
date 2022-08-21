const db = require('../db')

class MovieController {
	async createMovie(req, res){
		// console.log(req.body);
		const {title, release_year, genre_id, studio_id} = req.body
		const newMovie = await db.query(
			`INSERT INTO movies
			(title, release_year, genre_id, studio_id)
			VALUES($1, $2, $3, $4) RETURNING *`,
			[title, release_year, genre_id, studio_id]);
			console.log(newMovie);
		res.send('Ok')
	}
	async getMovies(req, res){
		res.send('Ok')
	}
	async getOneMovie(req, res){
		res.send('Ok')
	}
	async updateMovie(req, res){
		res.send('Ok')
	}
	async deleteMovie(req, res){
		res.send('Ok')
	}
}

module.exports = new MovieController();
