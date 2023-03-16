const db = require('../db');

class FilmController {
    async createFilm(req, res) {
        const {name, year} = req.body;
        try {
        const newFilm = await db.query('INSERT INTO Film (name, year) VALUES($1,$2) RETURNING *', [name,year]);
        res.json(newFilm.rows[0]);
        } catch (err) {
            res.json(err);
        }
    }
    async getFilms(req, res) {
        try {
        const users = await db.query('SELECT film_id, name, year FROM Film');
        res.json(users.rows);
        } catch (err) {
            res.json(err);
        }
    }
    async getFilm(req, res) {
        const id = req.params.id;
        try {
        const Film = await db.query('SELECT film_id, name, year FROM Film WHERE Film_id = $1', [id]);
        res.json(Film.rows[0]);
        } catch (err) {
        res.json(err);
        }
    }
    async updateFilm(req, res) {
        const {film_id, name, year} = req.body;
        try {
        const Film = await db.query('UPDATE Film SET name = $1, year = $2 WHERE film_id = $3 RETURNING *', [name,year,film_id]);
        res.json(Film.rows[0]);
        } catch (err) {
            res.json(err);
        }        
    }
    async deleteFilm(req, res) {
        const id = req.params.id;
        try {
        const Film = await db.query('DELETE FROM Film WHERE film_id = $1 RETURNING *', [id]);
        res.json(Film.rows[0]);
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = new FilmController();