
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()


const corsOption = {
    orgin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOption))


dotenv.config({path: './config.env'})
const PORT = process.env.PORT
require('./db/conn')


app.use(express.json())
app.use(require('./routes/auth'))           // REST API
app.use(require('./routes/contact'))           // REST API


app.listen(PORT, () => {
    console.log(`Server is runnning on ${PORT}`);
})