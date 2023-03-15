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
	name varchar(128) NOT NULL
);

CREATE TABLE Country (
	country_id serial PRIMARY KEY,
	name varchar(128) NOT NULL
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
	film_id integer references Film(film_id) NOT NULL,
	genre_id integer references Genre(genre_id)
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
	people_millions decimal,
	CONSTRAINT spectators_pkey PRIMARY KEY(film_id, country_id)	
);



INSERT INTO Person (name) values ('Петров Иван');
INSERT INTO Person (name) values ('Иванов Сидр');
INSERT INTO Person (name) values ('Сидоров Петр');
INSERT INTO Person (name) values ('Буранов Федор');
INSERT INTO Person (name) values ('Сазанов Егор');
INSERT INTO Person (name) values ('Нектаров Станислав');
INSERT INTO Person (name) values ('Опонин Роман');
INSERT INTO Person (name) values ('Куреметов Даниил');
INSERT INTO Person (name) values ('Умаратов Константин');
INSERT INTO Person (name) values ('Семенов Иван');
INSERT INTO Person (name) values ('Найджелс Николь');

INSERT INTO Country (name) values ('США');
INSERT INTO Country (name) values ('Россия');
INSERT INTO Country (name) values ('Франция');
INSERT INTO Country (name) values ('Германия');

INSERT INTO Genre (name) values ('драма');
INSERT INTO Genre (name) values ('фэнтези');
INSERT INTO Genre (name) values ('криминал');

INSERT INTO Film (name, year) values ('Унесенные', 2035);
INSERT INTO Film (name, year, country_id) values('Движ', 2035, 2);
INSERT INTO Film values(DEFAULT,'Умберто', 2036, 3, 100000, 200044, 4035350, 23444, '2035-12-23', '2035-10-24', '2036-03-14','18+', 'R', 580);
INSERT INTO Film (name,year) values ('Смысл', 2034);

INSERT INTO Actor VALUES(1,4);
INSERT INTO Actor VALUES(1,3);
INSERT INTO Actor VALUES(1,5);
INSERT INTO Actor VALUES(3,3,6);
INSERT INTO Actor VALUES(3,5,6);
INSERT INTO Actor VALUES(3,7,5);
INSERT INTO Actor VALUES(2,2,7);

INSERT INTO FilmGenre VALUES(1,1);
INSERT INTO FilmGenre VALUES(1,3);
INSERT INTO FilmGenre VALUES(2,2);
INSERT INTO FilmGenre VALUES(2,3);
INSERT INTO FilmGenre VALUES(3,null);

INSERT INTO Spectators VALUES
(2,1,null),
(1,2,1.1),
(1,1,1.2);

INSERT INTO FilmPersons VALUES
(1,7,8,9,2,3,5,2);
INSERT INTO FilmPersons VALUES
(2,7,8,9,null,3,5,2);
INSERT INTO FilmPersons VALUES
(3,7,null,9,2,null,5,2);


SELECT f.name, f.year, c.name FROM film as f LEFT JOIN country as c ON c.country_id = f.country_id;
SELECT f.name, p.name as Actor FROM Film AS f JOIN Actor Using(film_id) JOIN Person AS p USING(person_id) ORDER BY f.name;
SELECT f.name, p.name as Dubber FROM Film AS f JOIN Actor AS a Using(film_id) LEFT JOIN Person AS p ON p.person_id = a.dubber_id ORDER BY f.name;
SELECT f.name, p1.name AS Actor, p2.name AS Dubber FROM film as f Join Actor AS a Using(film_id) JOIN Person as p1 USING(person_id) LEFT JOIN Person as p2 ON p2.person_id = a.dubber_id ORDER BY f.name;
SELECT f.name, g.name FROM Film AS f JOIN FilmGenre AS fg USING(film_id) LEFT JOIN Genre AS g USING(genre_id) ORDER BY f.name;
SELECT f.name AS Film, sw.name AS Writer, dir.name AS Director, prod.name AS Producer, photo.name AS Photography, composer.name AS Composer, artist.name AS Artist, editor.name AS Editor FROM
Film AS f LEFT JOIN FilmPersons AS fp USING (film_id) LEFT JOIN Person AS sw ON sw.person_id=fp.screenwriter_id LEFT JOIN Person AS dir ON dir.person_id=fp.director_id
LEFT JOIN Person AS prod ON prod.person_id=fp.producer_id LEFT JOIN Person AS photo ON photo.person_id=fp.photographer_id LEFT JOIN Person AS composer ON composer.person_id=fp.composer_id
LEFT JOIN Person AS artist ON artist.person_id=fp.artist_id LEFT JOIN Person AS editor ON editor.person_id=fp.editor_id ORDER BY f.name;

