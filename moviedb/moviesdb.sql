DROP TABLE FilmGenre;
DROP TABLE Genre;
DROP TABLE Film;


CREATE TABLE Genre (
	genre_id serial PRIMARY KEY,
	name varchar(128) UNIQUE NOT NULL
);

CREATE TABLE Film (
	film_id serial PRIMARY KEY,
	name varchar(256) NOT NULL,
	year integer NOT NULL
);

CREATE TABLE FilmGenre (
	film_id integer references Film(film_id),
	genre_id integer references Genre(genre_id),
	CONSTRAINT film_genre_pk PRIMARY KEY (film_id, genre_id)
);

INSERT INTO FILM (name, year) VALUES('Привет', 3242);