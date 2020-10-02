import { Schema, model } from 'mongoose';

const LaneSchema = Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default model('Lane', LaneSchema);