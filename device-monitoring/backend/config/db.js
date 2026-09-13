// Import kebutuhan
import pg from 'pg';
import dotenv from 'dotenv'
dotenv.config();

// Pool postgresql 
const { Pool } = pg;

// Connect db 
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PSWD,
  database: process.env.DB_NAME,
});

pool.connect((error, client, release) => {
  if (error) {
    console.log('Gagal connect', error)
  } else {
    console.log('Berhasil terhubung')
  };
  if (client) release();
});

export default pool;
