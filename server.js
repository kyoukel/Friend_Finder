const express = require('express');
const bodyparser = require('body-parser');
const PORT = process.env.PORT || 3000;
const routes = require('./app/router');
const app = express();

const webErr = (err) =>
    console.log(`There was an error on the server ${err}`);

const webSuccess = (PORT) =>
    console.log(`Server is running on http://localhost:${PORT}`);

app
    .on('error', webErr)
    .use(bodyparser.urlencoded({
        extended: false
    }))
    .use(express.static('app/public'))
    .use('/api', routes.api)
    .use((req, res, next) => res.sendStatus(404))
    .use((err, req, res, next) => res.sendStatus(500))
    .listen(PORT, webSuccess(PORT))
        console.log('app is listening on PORT ' + PORT)