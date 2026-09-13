// Import kebutuhan
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import './config/db.js';

// Buat aplikasi 
const port = process.env.PORT;
const app = express();

// Buat routing sederhana
app.get('/', (req, res) => {
  res.send('Hello from express')
});

// Aktifkan server 
app.listen(port, () => {
  console.log('Server aktif')
});
