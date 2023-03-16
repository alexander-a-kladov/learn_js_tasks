const Router = require('express');
const router = new Router();
const filmGenreController = require('../controller/filmgenre.controller');

router.post('/filmgenre', filmGenreController.createFilmGenre);
router.get('/filmgenre', filmGenreController.getFilmGenres);
router.get('/filmgenre/:id', filmGenreController.getFilmGenre);
router.put('/filmgenre', filmGenreController.createFilmGenre);
router.delete('/filmgenre', filmGenreController.deleteFilmGenre);
 
module.exports = router;