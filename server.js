// server
const { default: ipc } = require('node-ipc');

ipc.config.id = 'server-1';
ipc.config.retry = 1500;
ipc.config.maxConnections = 1;

ipc.serve(
  function () {
    ipc.server.on(
      'channel-1',
      function (data, socket) {
        ipc.log('got a message : ', data);
        ipc.server.emit(
          socket,
          'channel-2',
          data + ' world!'
        );
      }
    );

    ipc.server.on(
      'socket.disconnected',
      function (data, socket) {
        console.log('DISCONNECTED\n\n');
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
