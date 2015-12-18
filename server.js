var express = require('express');
var app = express();

var coreserver = require('./coreserver.js');
var web = require('./web.js');
//app.set('view engine', 'html');
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/requestpair/', coreserver.requestpair);

app.get('/', web.main);

var port = process.env.PORT || 3000;

var webServer = app.listen(port, function () {
    console.log('Listening on port %d', webServer.address().port);
});
