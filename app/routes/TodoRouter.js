import { Router } from 'express';
const router = Router();
import { get, create, update } from '../controllers/TodoController';

router.get('/:todoId?', get);
router.post('/', create);
router.put('/:todoId', update);

export default router