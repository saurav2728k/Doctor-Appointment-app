// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// // import { createServer } from 'http'; // ✅ Import http server
// // import { Server } from 'socket.io'; // ✅ Import socket.io

// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import adminRouter from './routes/adminRoute.js';
// import doctorRouter from './routes/doctorRoute.js';
// import userRouter from './routes/userRoute.js';

// // App config
// const app = express();
// const port = process.env.PORT || 4000;
// connectDB();
// connectCloudinary();

// // ✅ Create HTTP server (No need to redefine)
// const server = createServer(app);

// // ✅ Initialize socket.io with updated frontend URL
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173", // Updated frontend URL
//     methods: ["GET", "POST"],
//   }
// });

// // ✅ Middlewares
// app.use(express.json());
// app.use(cors());

// // ✅ API endpoints
// app.use('/api/admin', adminRouter); 
// app.use('/api/doctor', doctorRouter);
// app.use('/api/user', userRouter);

// app.get('/', (req, res) => {
//     res.send('API WORKING');
// });

// // ✅ Socket.io Connection (Merged code)
// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);

//   // Join a specific doctor's chat room
//   socket.on('joinRoom', (docId) => {
//     socket.join(docId);
//     console.log(`User ${socket.id} joined room ${docId}`);
//   });

//   // Send message to a doctor in the room
//   socket.on('sendMessage', ({ docId, message }) => {
//     io.to(docId).emit('receiveMessage', message);
//   });

//   // Broadcast a message to all clients
//   socket.on('broadcastMessage', (data) => {
//     io.emit('receiveMessage', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// // ✅ Start the server (No need to redefine)
// server.listen(port, () => console.log(`Server running on port ${port}`));


import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// DB + Cloudinary connections
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

//
import appointmentRoutes from './routes/appointmentRoutes.js';
app.use('/api/appointments', appointmentRoutes);




// API endpoints
app.use('/api/admin', adminRouter); 
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

// Health check route
app.get('/', (req, res) => {
    res.send('API WORKING');
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
