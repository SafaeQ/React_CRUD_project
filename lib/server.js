const express = require('express');
const app = express();
const router = require('./routes/router')

app.use(express.json())


app.use('/', router)
app.listen(9000, () => {
    console.log('my server in listening on port http://localhost:9000');
})