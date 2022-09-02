const db = require('../db')

class StudioController {
	async createStudio (req, res, next) {
		try {
			const {title, found_year, location, logo} = req.body
			const newStudio = await db.query(
				`INSERT INTO studios
				(title, found_year, location_id, logo)
				VALUES($1, $2, (
					SELECT location_id
					FROM locations
					WHERE locations.title=$3),
				$4) RETURNING *`,
				[title, found_year, location, logo]);
				console.log(newStudio.rows[0]);
			res.json(newStudio.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async getStudios (req, res, next) {
		try {
			const studios = await db.query(
			`SELECT
					studio_id,
					studios.title title,
					to_char(found_year, 'yyyy-MM-dd') found_year,
					logo,
					locations.title location,
					array_agg(movies.title) movies
			FROM studios
			JOIN locations USING (location_id)
			LEFT JOIN movies USING (studio_id)
			GROUP BY
				studio_id,
				studios.title,
				found_year,
				logo,
				locations.title
			ORDER BY studio_id`)
			res.json(studios.rows)
		} catch (error) {
			console.log(error);
		}
	}
	async getOneStudio (req, res, next) {
		try {
			const id = req.params.id
			const studio =  await db.query(
			`SELECT
				studio_id,
				studios.title title,
				to_char(found_year, 'dd.MM.yyyy') found_year,
				logo,
				locations.title location,
				array_agg(movies.title) movies
			FROM studios
			JOIN locations USING (location_id)
			LEFT JOIN movies USING (studio_id)
			 WHERE studio_id=$1
			 GROUP BY
				studio_id,
				studios.title,
				found_year,
				logo,
				locations.title`
				, [id]
			)
			res.json(studio.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async updateStudio (req, res, next) {
		try {
			const {title, found_year, logo, location, studio_id} = req.body
			const updatedStudio = await db.query(
				`	UPDATE studios
					SET
						title = $1,
						found_year = $2,
						logo = $3,
						location_id = (
							SELECT location_id
							FROM locations
							WHERE title=$4)
					WHERE studio_id = $5
					RETURNING *
				`,
				[title, found_year, logo, location, studio_id]
			)
			res.json(updatedStudio.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
	async deleteStudio (req, res, next) {
		try {
			const id = req.params.id
			const delStudio = await db.query(
				`
					DELETE FROM studios
					WHERE studio_id = $1
					RETURNING *
				`,
				[id]
			)
			res.json(delStudio.rows[0])
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new StudioController();