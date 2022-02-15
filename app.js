const express = require('express');

const app = express();

app.use(express.json())

app.use('/', (req, res) => {
    res.send('heyyyyyy')
})

app.listen(9000, (req, res) => {
    console.log('my server in listening on port http://localhost:9000');
})