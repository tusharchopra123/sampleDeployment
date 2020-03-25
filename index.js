
const express = require('express')
const path = require('path')
const server_port = process.env.PORT || 3333

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(server_port, () => console.log('Server started at http://localhost:2678'))