const express = require('express');
const genreRoute = require('./routes/genre.routers');
const filmRoute = require('./routes/film.routers');
const filmGenreRoute = require('./routes/filmgenre.routers');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/api', genreRoute);
app.use('/api', filmRoute);
app.use('/api', filmGenreRoute);

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));
