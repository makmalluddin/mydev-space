// Import kebutuhan
import { createDevice, readDevice, readDeviceByID, updateDevice, deleteDevice } from '../controller/controller.js';
import express from 'express';
const router = express.Router();

// Definisikan router 
router.post('/', createDevice);
router.get('/', readDevice);
router.get('/:id', readDeviceByID);
router.put('/', updateDevice);
router.delete('/:id', deleteDevice);

export default router;
