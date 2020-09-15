const express = require('express');
const app = express();
const monggose = require('mongoose');
const todoRouter = require('./app/routes/TodoRouter');
const laneRouter = require('./app/routes/LaneRouter');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

monggose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connected to db');
}).catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/lane', laneRouter);
app.use('/todo', todoRouter);

app.listen(3000, () => {
    console.log('listen on port 3000');
});