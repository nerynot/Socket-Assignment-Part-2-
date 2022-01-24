var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

var db = {}

net.createServer(function(socket){
    var state = 0
    var current_key = null
    socket.on('data',function(data){
        switch(state){
            case 0 :
                if (data == 'Start' || data == 'start'){
                    socket.write('1.What is a striped hourse called ?')
                    state = 1
                }
                break
            case 1 :
                current_key = data
                if (current_key == 'zebra' || current_key == 'Zebra'){
                    socket.write('corret\n')
                    socket.write('2.What has three hand but only one face ?')
                    state = 2
                } else if (current_key == 'give up' || current_key == 'Give up'){
                    socket.write('You lost!\n')
                    socket.close()
                }
                else{
                    socket.write('wrong\n')
                    state =1
                }
                break
            case 2:
                current_key = data
                if (current_key == 'Clock' || current_key == 'clock') {
                    socket.write('corret\n')
                    socket.write('3.What is the end of everything ?')
                    state = 3
                } else if (current_key == 'give up' || current_key == 'Give up') {
                    socket.write('You lost!\n')
                    socket.close()
                }
                else {
                    socket.write('wrong\n')
                    state = 2
                }
                break
            case 3:
                current_key = data
                if (current_key == 'G' || current_key == 'g') {
                    socket.write('corret\n')
                    socket.write('You win')
                    socket.close()
                } else if (current_key == 'give up' || current_key == 'Give up') {
                    socket.write('You lost!\n')
                    socket.close()
                }
                else {
                    socket.write('wrong\n')
                    state = 2
                }
                break
        }
    })

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);