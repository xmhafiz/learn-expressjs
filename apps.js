import express from 'express';
const app = express();
import { connect } from 'mongoose';
import todoRouter from './app/routes/TodoRouter';
import laneRouter from './app/routes/LaneRouter';
import { json } from 'body-parser';

import 'dotenv/config';

app.use(json());

connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connected to db');
}).catch(err => {
    // console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/lane', laneRouter);
app.use('/todo', todoRouter);

app.listen(3000, () => {
    console.log('listen on port 3000');
});