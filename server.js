const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:19000", "http://localhost:19006"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
});
