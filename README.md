# node-ipc

## 实验 node-ipc

### tcp 通信

可以跨机器通信

参考分支 demo/use-tcp

### Unix Sockets 或者 Windows Sockets 通信

这是同一台机器上进程通信的最快方式，因为它绕过了TCP和UDP都必须使用的网卡。

参考分支 demo/use-serve-and-connectTo

### udp 通信

udp 和 tcp 或者 Sockets 不同， udp 需要两端同时开端口号来相互通信。

参考分支 demo/use-udp4

## 参考链接

- [node-ipc github](https://github.com/RIAEvangelist/node-ipc)
- [node-ipc example](https://github.com/RIAEvangelist/node-ipc/tree/master/example)