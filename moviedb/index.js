const Application = require('./framework/Application');
const filmRouter = require('./routes/film.routers');
const genreRouter = require('./routes/genre.routers');
const filmGenreRouter = require('./routes/filmgenre.routers');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');

const PORT = process.env.PORT || 8080;

const app = new Application();
app.use(jsonParser);
app.use(parseUrl('http://localhost:'+PORT));

app.addRouter("/api", filmRouter);
app.addRouter("/api", genreRouter);
app.addRouter("/api", filmGenreRouter);

const start = async()=> {
    try {;
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();