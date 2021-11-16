// server
const { default: ipc } = require('node-ipc');

ipc.config.id = 'world';
ipc.config.retry = 1500;
ipc.config.maxConnections = 1;

ipc.serveNet(
  function () {
    ipc.server.on(
      'message',
      function (data, socket) {
        ipc.log('got a message : ', data);
        ipc.server.emit(
          socket,
          'message',
          data + ' world!'
        );
      }
    );

    ipc.server.on(
      'socket.disconnected',
      function (data, socket) {
        console.log('DISCONNECTED\n\n', arguments);
      }
    );
  }
);
ipc.server.on(
  'error',
  function (err) {
    ipc.log('Got an ERROR!', err);
  }
);
ipc.server.start();
