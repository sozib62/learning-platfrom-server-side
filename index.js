const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const course = require('./Data/course.json')

app.get('/', (req, res) => {
    res.send('Education server running')
});


app.get('/course', (req, res) => {
    res.send(course)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course_id = course.find(c => c.id === id)
    res.send(course_id)
})

app.listen(port, () => {
    console.log(`Education server running on port: ${port}`)
});