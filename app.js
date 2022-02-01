// Task 1a
const express = require('express');

const app = express();

// Task 2
app.get('/', (req, res) => {
    res.send('Welcome to Breaddit')
})




// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))