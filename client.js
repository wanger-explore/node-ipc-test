const { default: ipc } = require('node-ipc');

ipc.config.id = 'client-1';
ipc.config.retry = 1500;

ipc.connectToNet(
  'server-1',
  function () {
    ipc.of['server-1'].on(
      'connect',
      function () {
        ipc.log('## connected to server-1 ##', ipc.config.delay);
        ipc.of['server-1'].emit(
          'channel-1',
          'hello'
        );
      }
    );
    ipc.of['server-1'].on(
      'disconnect',
      function () {
        ipc.log('disconnected from server-1');
      }
    );
    ipc.of['server-1'].on(
      'channel-2',
      function (data) {
        ipc.log('got a message from channel-2 : ', data);
      }
    );
  }
);