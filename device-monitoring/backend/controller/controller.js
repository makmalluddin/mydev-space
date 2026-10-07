// Import kebutuhan 
import pool from '../config/db.js';

// Create 
export const createDevice = async (req, res) => {
  const { name, type, status } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO devices (name, type, status) VALUES ($1, $2, $3) RETURNING *`,
      [name, type, status || 'inactive']
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read 
export const readDevice = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM devices`
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read one 
export const readDeviceByID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM devices WHERE id = $1`, [id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'perangkat tidak ditemukan' })
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update 
export const updateDevice = async (req, res) => {
  const { id } = req.params;
  const { name, type, status } = req.body;
  try {
    const result = await pool.query(
      `UPDATE devices 
    SET name = $1, type = $2, status = $3, updated_at = CURRENT_TIMESTAMP
    WHERE id = $4 RETURNING*
    `, [name, type, status, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Perangkat tidak ditemukan' })
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Delete 
export const deleteDevice = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `DELETE FROM devices WHERE id = $1 RETURNING *`, [id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Perangkat tidak ditemukan' })
    }
    res.status(200).json({ message: 'Perangkat berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
