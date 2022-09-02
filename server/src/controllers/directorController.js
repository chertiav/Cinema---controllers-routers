const db = require('../db')

class DirectorController {
	async createDirector (req, res, next) {
		try {
			const {full_name, birth_year, death_year, nationality, foto} = req.body
			const newDirector = await db.query(
				`INSERT INTO directors
				(full_name, birth_year, death_year, nationality_id, foto)
				VALUES($1, $2, $3, (
					SELECT nationality_id
					FROM nationalities
					WHERE description=$4),
				$5) RETURNING *`,
				[full_name, birth_year, death_year, nationality, foto]);
				console.log(newDirector.rows[0]);
			res.json(newDirector.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async getDirectors (req, res, next) {
		try {
			const directors = await db.query(
			`SELECT
					director_id,
					full_name,
					to_char(birth_year, 'yyyy-MM-dd') birth_year,
					to_char(death_year, 'yyyy-MM-dd') death_year,
					foto,
					nationalities.description nationality,
					array_agg(movies.title) movies
			FROM directors
			JOIN nationalities USING (nationality_id)
			LEFT JOIN movies_directors USING (director_id)
			LEFT JOIN movies USING (movie_id)
			GROUP BY
				director_id,
				full_name,
				birth_year,
				death_year,
				foto,
				nationality
			ORDER BY director_id`)
			res.json(directors.rows)
		} catch (error) {
			console.log(error);
		}
	}
	async getOneDirector (req, res, next) {
		try {
			const id = req.params.id
			const director =  await db.query(
				`SELECT
					director_id,
					full_name,
					to_char(birth_year, 'dd.mm.yyyy') birth_year,
					to_char(death_year, 'dd.mm.yyyy') death_year,
					foto image,
					nationalities.description nationality,
					string_agg(movies.title, ', ') movies
			 FROM directors
			 JOIN nationalities USING (nationality_id)
			 LEFT JOIN movies_directors USING (director_id)
			 LEFT JOIN movies USING (movie_id)
			 WHERE director_id=$1
			 GROUP BY
			 	director_id,
				full_name,
				birth_year,
				death_year,
				image,
				nationality`
				, [id]
			)
			res.json(director.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async updateDirector (req, res, next) {
		try {
			const {full_name, birth_year, death_year, foto, nationality, director_id} = req.body
			const updatedDirector = await db.query(
				`	UPDATE directors
					SET
						full_name = $1,
						birth_year = $2,
						death_year = $3,
						foto = $4,
						nationality_id = (
							SELECT nationality_id
							FROM nationalities
							WHERE description=$5)
					WHERE director_id = $6
					RETURNING *
				`,
				[full_name, birth_year, death_year, foto, nationality, director_id]
			)
			res.json(updatedDirector.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async deleteDirector (req, res, next) {
		try {
			const id = req.params.id
			const delDirector = await db.query(
				`
					DELETE FROM directors
					WHERE director_id = $1
					RETURNING *
				`,
				[id]
			)
			res.json(delDirector.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new DirectorController();