DROP TABLE Spectators;
DROP TABLE FilmPersons;
DROP TABLE Actor;
DROP TABLE FilmGenre;
DROP TABLE Genre;
DROP TABLE Film;
DROP TABLE Country;
DROP TABLE Person;

CREATE TABLE Person (
	person_id serial PRIMARY KEY,
	name varchar(128) NOT NULL
);

CREATE TABLE Genre (
	genre_id serial PRIMARY KEY,
	name varchar(128) UNIQUE NOT NULL
);

CREATE TABLE Country (
	country_id serial PRIMARY KEY,
	name varchar(128) UNIQUE NOT NULL
);


CREATE TABLE Film (
	film_id serial PRIMARY KEY,
	name varchar(256) NOT NULL,
	year integer NOT NULL,
	country_id integer references Country(country_id),
	budget integer,
	advertisement integer,
	box_office_usa integer,
	box_office_world integer,
	premier_russia date,
	premier_world date,
	dvd_release date,
	age_restriction varchar,
	mpaa_rating varchar,
	running_time integer
);

CREATE TABLE FilmGenre (
	film_id integer references Film(film_id),
	genre_id integer references Genre(genre_id),
	CONSTRAINT film_genre_pk PRIMARY KEY(film_id, genre_id)
);

CREATE TABLE Actor (
	film_id integer references film(film_id),
	person_id integer references person(person_id),
	dubber_id integer references person(person_id),
	CONSTRAINT actor_pkey PRIMARY KEY(film_id, person_id)
);

CREATE TABLE FilmPersons (
	film_id integer references film(film_id),
	screenwriter_id integer references person(person_id),
	director_id integer references person(person_id),
	producer_id integer references person(person_id),
	photographer_id integer references person(person_id),
	composer_id integer references person(person_id),
	artist_id integer references person(person_id),
	editor_id integer references person(person_id),
	CONSTRAINT film_persons_pkey PRIMARY KEY(film_id)
);

CREATE TABLE Spectators (
	film_id integer,
	country_id integer,
	people_millions decimal NOT NULL CHECK (people_millions>=0.0),
	CONSTRAINT spectators_pkey PRIMARY KEY(film_id, country_id)	
);

