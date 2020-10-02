import { Schema, model } from 'mongoose';

const TodoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    lane: {
        type: Schema.Types.ObjectId,
        ref: 'Lane',
        default: null,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default model('Todo', TodoSchema);