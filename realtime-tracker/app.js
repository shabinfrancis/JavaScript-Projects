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
    console.log("a user connected");
})

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(8086);