require('rootpath')();
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

app.use(cors());

app.use(helmet({
  frameguard: {
    action: 'deny'
  },
  noCache: true
}));


// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/workouts', require('./workouts/workouts.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});