const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//load config
dotenv.config({ path: './config/config.env' })

// connection db
connectDB();

const app = express()
const PORT = process.env.PORT || 5003

app.get("/",(req, res) => {
    res.send({Message: "Hello world"})
})

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))