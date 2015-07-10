var express = require('express')
  , app = express()
  , config = require('./config');

app.use(express.static('public'));

app.listen(config.port, function () {
  console.log('Example app listening at http://localhost::%s', config.port);
});
