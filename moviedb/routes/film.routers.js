const Router = require('../framework/Router');
const router = new Router();
const filmController = require('../controller/film.controller');

router.post('/film', filmController.createFilm);
router.get('/films', filmController.getFilms);
router.get('/film', filmController.getFilm);
router.put('/film', filmController.updateFilm);
router.delete('/film', filmController.deleteFilm);
 
module.exports = router;
