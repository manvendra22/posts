const express = require('express');
const cors = require('cors')
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const router = require("./routes");

const app = express();

app.use(cors())
app.use(logger('dev'));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();
const port = process.env.PORT || 9000;

/**
Serve static files from the React app
*/
app.use(express.static(path.join(__dirname, 'client/build')));

/**
index router
*/
app.use("/", router);

/**
catch 404 and forward to error handler
*/
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
The "catchall" handler: for any request that doesn't
match one above, send back React's index.html file.
*/
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

/**
error handler
*/
app.use(function (err, req, res, next) {
    console.error(err)
    /**
    set locals, only providing error in development
    */
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    /**
    render the error page
    */
    res.status(err.status || 500);
    res.json({ error: err })
});

app.listen(port, function () {
    console.log(`Example app listening on port: ${port}`);
});
