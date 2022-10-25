const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Education server running')
});

app.listen(port, () => {
    console.log(`Education server running on port: ${port}`)
});