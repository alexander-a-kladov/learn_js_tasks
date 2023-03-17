const db = require('../db');

class GenreController {
    async createGenre(req, res) {
        const {name} = req.body;
        try {
        const newGenre = await db.query('INSERT INTO Genre (name) VALUES($1) RETURNING *', [name]);
        res.send(newGenre.rows[0]);
        } catch (err) {
            res.send(err);
        }
    }
    async getGenres(req, res) {
        try {
        const genres = await db.query('SELECT genre_id, name FROM Genre');
        res.send(genres.rows);
        } catch (err) {
            res.send(err);
        }
    }
    async getGenre(req, res) {
        const id = req.params.id;
        try {
        const genre = await db.query('SELECT genre_id, name FROM Genre WHERE genre_id = $1', [id]);
        res.send(genre.rows[0]);
        } catch (err) {
            res.send(err);
        }
    }
    async updateGenre(req, res) {
        const {id, name} = req.body;
        try {
        const genre = await db.query('UPDATE Genre SET name = $1 WHERE genre_id = $2 RETURNING *', [name,id]);
        res.send(genre.rows[0]);
        } catch (err) {
            res.send(err);
        }        
    }
    async deleteGenre(req, res) {
        const id = req.params.id;
        try {
        const genre = await db.query('DELETE FROM Genre WHERE genre_id = $1 RETURNING *', [id]);
        res.send(genre.rows[0]);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = new GenreController();