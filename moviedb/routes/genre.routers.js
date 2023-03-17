const Router = require('../framework/Router');
const router = new Router();
const genreController = require('../controller/genre.controller');

router.post('/genre', genreController.createGenre);
router.get('/genres', genreController.getGenres);
router.get('/genre', genreController.getGenre);
router.put('/genre', genreController.updateGenre);
router.delete('/genre', genreController.deleteGenre);
 
module.exports = router;
