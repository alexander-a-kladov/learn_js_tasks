SELECT f.name, f.year, c.name FROM film as f LEFT JOIN country as c ON c.country_id = f.country_id;
SELECT f.name, p.name as Actor FROM Film AS f JOIN Actor Using(film_id) JOIN Person AS p USING(person_id) ORDER BY f.name;
SELECT f.name, p.name as Dubber FROM Film AS f JOIN Actor AS a Using(film_id) LEFT JOIN Person AS p ON p.person_id = a.dubber_id ORDER BY f.name;
SELECT f.name, p1.name AS Actor, p2.name AS Dubber FROM film as f Join Actor AS a Using(film_id) JOIN Person as p1 USING(person_id) LEFT JOIN Person as p2 ON p2.person_id = a.dubber_id ORDER BY f.name;
SELECT f.name, g.name FROM Film AS f JOIN FilmGenre AS fg USING(film_id) LEFT JOIN Genre AS g USING(genre_id) ORDER BY f.name;
SELECT f.name AS Film, sw.name AS Writer, dir.name AS Director, prod.name AS Producer, photo.name AS Photography, composer.name AS Composer, artist.name AS Artist, editor.name AS Editor FROM
Film AS f LEFT JOIN FilmPersons AS fp USING (film_id) LEFT JOIN Person AS sw ON sw.person_id=fp.screenwriter_id LEFT JOIN Person AS dir ON dir.person_id=fp.director_id
LEFT JOIN Person AS prod ON prod.person_id=fp.producer_id LEFT JOIN Person AS photo ON photo.person_id=fp.photographer_id LEFT JOIN Person AS composer ON composer.person_id=fp.composer_id
LEFT JOIN Person AS artist ON artist.person_id=fp.artist_id LEFT JOIN Person AS editor ON editor.person_id=fp.editor_id ORDER BY f.name;

