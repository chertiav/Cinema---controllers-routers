CREATE TABLE nationalities (
	nationality_id SERIAL PRIMARY KEY,
	title VARCHAR(10) NOT NULL UNIQUE,
	description TEXT
);
CREATE TABLE locations (
	location_id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL UNIQUE,
	nationality_id INTEGER NOT NULL,
	FOREIGN KEY (nationality_id) REFERENCES nationalities(nationality_id)
);
CREATE TABLE genres (
	genre_id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL UNIQUE,
	description TEXT
);
CREATE TABLE directors (
	director_id SERIAL PRIMARY KEY,
	full_name VARCHAR(100) NOT NULL,
	birth_year DATE,
	death_year DATE,
	foto TEXT,
	nationality_id INTEGER NOT NULL,
	FOREIGN KEY (nationality_id) REFERENCES nationalities(nationality_id)
);
CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	full_name VARCHAR(100) NOT NULL,
	birth_year DATE,
	death_year DATE,
	foto TEXT,
	nationality_id INTEGER NOT NULL,
	FOREIGN KEY (nationality_id) REFERENCES nationalities(nationality_id)
);
CREATE TABLE studios (
	studio_id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL UNIQUE,
	found_year DATE,
	logo TEXT,
	location_id INTEGER NOT NULL,
	FOREIGN KEY (location_id) REFERENCES locations(location_id)
);
CREATE TABLE movies (
	movie_id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	release_year DATE,
	genre_id INTEGER,
	studio_id INTEGER,
	poster TEXT,
	FOREIGN KEY (genre_id) REFERENCES genres(genre_id),
	FOREIGN KEY (studio_id) REFERENCES studios(studio_id)
);
CREATE TABLE movies_directors (
	movie_id INTEGER,
	director_id INTEGER,
	FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
	FOREIGN KEY (director_id) REFERENCES directors(director_id)
);
CREATE TABLE movies_actors (
	movie_id INTEGER,
	actor_id INTEGER,
	FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
	FOREIGN KEY (actor_id) REFERENCES actors(actor_id)
);