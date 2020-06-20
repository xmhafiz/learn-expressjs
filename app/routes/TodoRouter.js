const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/:postId?', async (req, res) => {
    try {
        var postId = req.params.postId;
        if (postId) {
            const todos = await Todo.findById(postId);
            res.json(todos);
        }
        else {
            const todos = await Todo.find();
            res.json(todos);
        }
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    });
    try {
        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router