import express from 'express';
import { getCircuitStatistics } from '../../controllers/circuits.controllers';
import { authenticate } from '../../middleware/auth.middleware';

const router = express.Router();
router.use(authenticate);
router.get('/statistics/circuit', getCircuitStatistics);

export default router;