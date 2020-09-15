const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    lane: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lane',
        default: null,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Todo', TodoSchema);