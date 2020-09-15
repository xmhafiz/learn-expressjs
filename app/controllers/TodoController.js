const Todo = require('../models/Todo');

exports.get = async (req, res) => {
    try {
        let todoId = req.params.todoId;
        if (todoId) {
            const todos = await Todo.findById(todoId)
            .populate({ path: 'lane'});
            res.json(todos);
        }
        else {
            const todos = await Todo.find()
            .populate({ path: 'lane'});
            res.json(todos);
        }
    } catch (error) {
        res.json({ message: error });
    }
};

exports.create = async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        lane: req.body.laneId
    });
    try {
        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch (error) {
        res.json({ message: error });
    }
};

exports.update = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.todoId, {
        title: req.body.title,
        completed: req.body.completed,
        date: new Date()
    },
    {
        new: true // get latest saved object
    },
    function(err, todo) {
        if (err) {
            res.json({ message: err });
        }
        else {
            res.json(todo);
        }
    });
}