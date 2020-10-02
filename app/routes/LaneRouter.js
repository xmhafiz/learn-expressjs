import { Router } from 'express';
const router = Router();
import { get, create } from '../controllers/LaneController';

router.get('/:laneId?', get);
router.post('/', create);

export default router