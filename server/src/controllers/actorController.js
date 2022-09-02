const db = require('../db')

class ActorController {
	async createActor (req, res, next) {
		try {
			const {full_name, birth_year, death_year, nationality, foto} = req.body
			const newActor = await db.query(
				`INSERT INTO actors
				(full_name, birth_year, death_year, nationality_id, foto)
				VALUES($1, $2, $3, (
					SELECT nationality_id
					FROM nationalities
					WHERE description=$4),
				$5) RETURNING *`,
				[full_name, birth_year, death_year, nationality, foto]);
				console.log(newActor.rows[0]);
			res.json(newActor.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async getActors (req, res, next) {
		try {
			const actors = await db.query(
			`SELECT
					actor_id,
					full_name,
					to_char(birth_year, 'yyyy-MM-dd') birth_year,
					to_char(death_year, 'yyyy-MM-dd') death_year,
					foto,
					nationalities.description nationality,
					array_agg(movies.title) movies
			FROM actors
			JOIN nationalities USING (nationality_id)
			LEFT JOIN movies_actors USING (actor_id)
			LEFT JOIN movies USING (movie_id)
			GROUP BY
				actor_id,
				full_name,
				birth_year,
				death_year,
				foto,
				nationality
			ORDER BY actor_id`)
			res.json(actors.rows)
		} catch (error) {
			console.log(error);
		}
	}
	async getOneActor (req, res, next) {
		try {
			const id = req.params.id
			const actor =  await db.query(
				`SELECT
					actor_id,
					full_name,
					to_char(birth_year, 'dd.mm.yyyy') birth_year,
					to_char(death_year, 'dd.mm.yyyy') death_year,
					foto image,
					nationalities.description nationality,
					string_agg(movies.title, ', ') movies
			 FROM actors
			 JOIN nationalities USING (nationality_id)
			 LEFT JOIN movies_actors USING (actor_id)
			 LEFT JOIN movies USING (movie_id)
			 WHERE actor_id=$1
			 GROUP BY
			 	actor_id,
				full_name,
				birth_year,
				death_year,
				image,
				nationality`
				, [id]
			)
			res.json(actor.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async updateActor (req, res, next) {
		try {
			const {full_name, birth_year, death_year, foto, nationality, actor_id} = req.body
			const updatedActor = await db.query(
				`	UPDATE actors
					SET
						full_name = $1,
						birth_year = $2,
						death_year = $3,
						foto = $4,
						nationality_id = (
							SELECT nationality_id
							FROM nationalities
							WHERE description=$5)
					WHERE actor_id = $6
					RETURNING *
				`,
				[full_name, birth_year, death_year, foto, nationality, actor_id]
			)
			res.json(updatedActor.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async deleteActor (req, res, next) {
		try {
			const id = req.params.id
			const delActor = await db.query(
				`
					DELETE FROM actors
					WHERE actor_id = $1
					RETURNING *
				`,
				[id]
			)
			res.json(delActor.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new ActorController();