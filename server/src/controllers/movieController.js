const db = require('../db')

class MovieController {
	async createMovie(req, res){
		try {
			const {title, release_year, genre, studios, poster} = req.body
			const newMovie = await db.query(
				`INSERT INTO movies
				(title, release_year, genre_id, studio_id, poster)
				VALUES($1, $2,
					(
						SELECT genre_id
						FROM genres
						WHERE title=$3
					),
					(
						SELECT studio_id
						FROM studios
						WHERE title=$4
					),
				$5) RETURNING *`,
				[title, release_year, genre, studios, poster]);
			res.json(newMovie.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async getMovies(req, res){
		try {
			const movies = await db.query(
			`SELECT
				movie_id,
				movies.title title,
				to_char(release_year, 'yyyy-MM-dd') release_year,
				poster,
				genres.title genre,
				studios.title studio,
				array_agg(DISTINCT(directors.full_name)) directors,
				array_agg(actors.full_name) actors
			FROM movies
			LEFT JOIN genres USING (genre_id)
			LEFT JOIN studios USING (studio_id)
			LEFT JOIN movies_directors USING (movie_id)
			LEFT JOIN directors USING (director_id)
			LEFT JOIN movies_actors USING (movie_id)
			LEFT JOIN actors USING (actor_id)
			GROUP BY
				movie_id,
				movies.title,
				release_year,
				poster,
				genres.title,
				studios.title
			ORDER BY movie_id`)
			res.json(movies.rows)
		} catch (error) {
			console.log(error);
		}
	}
	async getOneMovie(req, res){
		try {
			const id = req.params.id;
			const movie = await db.query(
				`SELECT
					movie_id,
					movies.title title,
					to_char(release_year, 'dd.MM.yyyy') release_year,
					poster,
					genres.title genre,
					studios.title studio,
					array_agg(DISTINCT(directors.full_name)) directors,
					array_agg(actors.full_name) actors
				FROM movies
				LEFT JOIN genres USING (genre_id)
				LEFT JOIN studios USING (studio_id)
				LEFT JOIN movies_directors USING (movie_id)
				LEFT JOIN directors USING (director_id)
				LEFT JOIN movies_actors USING (movie_id)
				LEFT JOIN actors USING (actor_id)
				WHERE movie_id=$1
				GROUP BY
					movie_id,
					movies.title,
					release_year,
					poster,
					genres.title,
					studios.title
				ORDER BY movie_id`
			, [id])
			// console.log(movie.rows);
			res.json(movie.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async updateMovie(req, res){
		try {
			const {title, release_year, genre_id, studio_id, poster, movie_id} = req.body
			const updatedMovie = await db.query(
			`	UPDATE movies
				SET
					title = $1,
					release_year = $2,
					genre_id = (
						SELECT genre_id
						FROM genres
						WHERE title=$3
					),
					studio_id = (
						SELECT studio_id
						FROM studios
						WHERE title=$4
					),
					poster = $5
				WHERE movie_id = $6
				RETURNING *`,
			[title, release_year, genre_id, studio_id, poster, movie_id]
		)
		res.json(updatedMovie.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async deleteMovie(req, res){
		try {
			const id = req.params.id;
			const delMovie = await db.query(
				`
					DELETE FROM movies
					WHERE movie_id = $1
					RETURNING *
				`,
				[id]
			)
			res.json(delMovie.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new MovieController();
