const db = require('../db');

class FilmGenreController {
    async createFilmGenre(req, res) {
        const {film_id, genre_id} = req.body;
        try {
        const newFilmGenre = await db.query('INSERT INTO filmgenre (film_id, genre_id) VALUES($1,$2) RETURNING *', [film_id,genre_id]);
        res.send(newFilmGenre.rows[0]);
        } catch (err)  {
            res.send(err);
        }
    }
    async getFilmGenres(req, res) {
        try { 
        const filmGenres = await db.query('SELECT film_id, genre_id FROM filmgenre');
        res.send(filmGenres.rows);
        } catch (err) {
            res.send(err);
        }
    }
    async getFilmGenre(req, res) {
        const id = req.params.id;
        try {
        const filmGenre = await db.query('SELECT film_id, genre_id, name FROM filmgenre JOIN genre USING(genre_id) WHERE film_id = $1', [id]);
        res.send(filmGenre.rows);
        } catch (err) {
            res.send(err);
        }
    }
    async deleteFilmGenre(req, res) {
        const {film_id, genre_id} = req.body;
        try {
        const filmGenre = await db.query('DELETE FROM filmgenre WHERE film_id = $1 and genre_id = $2 RETURNING *', [film_id, genre_id]);
        res.send(filmGenre.rowCount);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = new FilmGenreController();