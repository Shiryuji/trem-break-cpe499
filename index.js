const express = require("express");
const morgan = require("morgan");

const filmRouter = require('./film');

const app = express();
app.use(express.static('public'))
app.use(morgan('common',{immediate:true}));
app.use('/films', filmRouter);

app.get('/', (request, response) => response.redirect('/films'));

app.listen(8080, () => {
    console.log('Server is listening to http://localhost:8080');
});