const express = require('express');

const reload = require('reload');
const watch = require('watch');
const bodyParser = require("body-parser");
const axios = require('axios');

const api = require('./router-api');

const app = express();

app.use(bodyParser.json());

// Reloading the backend when backend is changed.
reloadServer = reload(app);

watch.watchTree(__dirname + "/frontend/dist", function (f, curr, prev) {
  // Fire server-side reload event 
  reloadServer.reload();
});

app.use(express.static('frontend/dist'));

app.use('/api', api);

app.use((req, res, next) => {
  res.sendFile(__dirname + "/frontend/dist/index.html");
});

app.listen(8080);