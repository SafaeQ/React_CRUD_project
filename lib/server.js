const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const router = require('./routes/router')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)
app.listen(9000, () => {
    console.log('my server in listening on port http://localhost:9000');
})