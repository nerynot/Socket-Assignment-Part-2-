const net = require('net');
const readline = require('readline');
var HOST = '127.0.0.1';
var PORT = 6969;

const client = new net.Socket();
client.connect(PORT, HOST, function () {
    console.log('Welcome to the quiz game');
    console.log('Write Start to play');
});
client.on('data', (data)=>{
    console.log(data.toString('utf-8'));
});

const rl = readline.createInterface({ input: process.stdin });
rl.on('line', (line) => {
    client.write(line);
});
client.on('close', () => {
    client.log('Connetion closed');
});