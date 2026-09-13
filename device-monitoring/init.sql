-- Drop table jika sudah ada 
DROP TABLE IF EXISTS devices;

-- CREATE TABLE 
CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'inactive',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- run script: sudo -u postgres psql -d device_monitoring -f init.sql 
