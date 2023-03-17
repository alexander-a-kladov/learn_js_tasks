const Router = require('../framework/Router');
const router = new Router();
const filmGenreController = require('../controller/filmgenre.controller');

router.post('/filmgenre', filmGenreController.createFilmGenre);
router.get('/filmgenres', filmGenreController.getFilmGenres);
router.get('/filmgenre', filmGenreController.getFilmGenre);
router.put('/filmgenre', filmGenreController.createFilmGenre);
router.delete('/filmgenre', filmGenreController.deleteFilmGenre);
 
module.exports = router;