const { default: ipc } = require('node-ipc');

ipc.config.id = 'server-2';
ipc.config.retry = 1500;

ipc.serveNet(
  9001,
  'udp4',
  function () {
    ipc.server.on(
      'channel-2',
      function (data, socket) {
        ipc.log('got data:', data)
        ipc.log('got socket:', socket)
      }
    );
    ipc.server.emit(
      {
        address: '127.0.0.1', //any hostname will work
        port: 9000
      },
      'channel-1',
      {
        from: ipc.config.id,
        message: 'Hello'
      }
    );
  }
);

ipc.server.start();
