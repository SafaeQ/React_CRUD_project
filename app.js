const express = require('express');
const app = express();
const router = require('./lib/routes/router')

app.use(express.json())

app.use('/', (req, res) => {
    res.send('heyyyyyy')
})

app.use('/', router)
app.listen(9000, () => {
    console.log('my server in listening on port http://localhost:9000');
})