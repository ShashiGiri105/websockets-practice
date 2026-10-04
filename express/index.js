const socket = require("websockets/lib/websockets/socket");
const WebSocket = require("ws");

const server = new WebSocket.Server({
    host: "127.0.0.1",
    port: 8080
}, () => {
    console.log("Server is running on 8080");
});

server.on("connection", (socket) => {
    console.log("Client connected");

    socket.send("Hello from server");

    socket.on("message", (message) => {
        console.log("Received:", message.toString());
    });

    setInterval(() => {
            socket.send("Hello from server");
        }, 5000);
});

