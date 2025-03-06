const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const path = require("path");


const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket) {
    socket.on("send-location", (data) => {
        io.emit("receive-location", {id: socket.id, ...data})
    })
    console.log("a user connected");

    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id);
    })
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(8086);