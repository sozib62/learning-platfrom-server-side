const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

// const courseCategory = require('./Data/courseCategory.json')
const course = require('./Data/course.json')

app.get('/', (req, res) => {
    res.send('Education server running')
});

app.get('/category', (req, res) => {
    res.send(courseCategory)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const coursesData = course.find(c => c._id === id);
    res.send(coursesData)
})


app.listen(port, () => {
    console.log(`Education server running on port: ${port}`)
});