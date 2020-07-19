const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.get('/:todoId?', TodoController.get);
router.post('/', TodoController.create);
router.put('/:todoId', TodoController.update);

module.exports = router