const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8081');

ws.on('open', function open() {
  ws.send('MessageFromClient');
});

ws.on('message', function incoming(data) {
  console.log('onMessage : ' + data);
});