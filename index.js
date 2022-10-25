const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const courseCategory = require('./Data/courseCategory.json')

app.get('/', (req, res) => {
    res.send('Education server running')
});

app.get('/category', (req, res) => {
    res.send(courseCategory)
});

app.listen(port, () => {
    console.log(`Education server running on port: ${port}`)
});