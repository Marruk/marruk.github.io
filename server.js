'use strict';

var compression = require('compression');
var express = require('express');

var app = express();
app.use(compression());
app.use(express.static(__dirname));
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Start server
var port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
