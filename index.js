var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
   console.log('a user connected');
  socket.on('chat_message', function(msg){
    io.emit('chat_message', msg);
  });
});

http.listen(process.env.PORT, process.env.IP, function(){
  console.log('listening on *:3000');
}).listen(process.env.PORT);