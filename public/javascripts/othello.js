$(function(){
    var server = 'http://www40354u.sakura.ne.jp:3000/';
    var socket = io.connect(server);
    
    socket.on('connect', function(message) {
        console.log('connect');
        socket.on('message', function(message) {
            console.log('get message' + message);
        });
        socket.on('disconnect', function(message) {
            console.log('disconnect');
        });
    });

    $('#map').click(function() {
        socket.emit('message', 'hoge');
        console.log('send message hoge');
    });
});
