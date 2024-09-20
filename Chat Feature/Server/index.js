// import express  from "express";
// const app = express();
// import { createServer } from "http";
// import cors from "cors";
// import { Server } from "socket.io";
// app.use(cors());

// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

// server.listen(3000, () => {
//   console.log("SERVER RUNNING");
// });

import express from "express";
const app = express();
import { createServer } from "http";
import cors from "cors";
import { Server } from "socket.io";

app.use(cors());
app.use(express.static("public")); // Serve static files from the "public" folder

// Add a route to handle GET requests to the root URL ("/")
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../Client/src/index.js");
  res.sendFile(filePath);
});

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3000, () => {
  console.log("SERVER RUNNING");
});