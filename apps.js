const express = require('express');
const app = express();
const monggose = require('mongoose');
const todoRouter = require('./app/routes/TodoRouter');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

monggose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to db');
}).catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/todo', todoRouter);

app.listen(3000, () => {
    console.log('listen on port 3000');
});