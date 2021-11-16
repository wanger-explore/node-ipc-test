// server
const { default: ipc } = require('node-ipc');

ipc.config.id = 'sever-1';
ipc.config.retry = 1500;

ipc.serveNet(
  9000,
  'udp4',
  function () {
    ipc.server.on(
      'channel-1',
      function (data, socket) {
        ipc.log('got data:', data)
        ipc.log('got socket:', socket)
        ipc.server.emit(
          socket,
          'channel-2',
          {
            from: ipc.config.id,
            message: data.message + ' world!'
          }
        );
      }
    );
  }
);

ipc.server.start();
