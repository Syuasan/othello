
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , http = require('http');

var app = express();

app.configure(function(){    
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);

var http = http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});

var io = require('socket.io').listen(http);
io.sockets.on('connection', function(socket) {
    console.log('connection');
    
    socket.on('message', function(message) {
        console.log('message');
        socket.emit('message', message);
    });
    socket.on('disconnect', function() {
        console.log('disconnect');
    });
});

