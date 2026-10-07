// Import kebutuhan
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import deviceRoutes from './router/router.js'
dotenv.config();

// Buat aplikasi 
const port = process.env.PORT;
const app = express();

// Basic middleware 
app.use(cors());
app.use(express.json());

// Routing 
app.use('/api/devices', deviceRoutes);

// Buat routing sederhana
app.get('/', (req, res) => {
  res.send('Hello from express')
});

// Aktifkan server 
app.listen(port, () => {
  console.log('Server aktif')
});
