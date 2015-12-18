var express = require('express');
var app = express();

var coreserver = require('./server.js');

//var web = require('./web.js');


app.get('/requestpair/:name/', coreserver.requestpair);
app.get('/requestpair/', coreserver.requestpair);

app.listen(3000);
