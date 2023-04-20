const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:19000", "http://localhost:19006"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (message, room) => {
    if (!room) {
      socket.emit("Room is not provided.");
    } else {
      socket.to(room).emit("receive-message", message);
    }
  });
});
