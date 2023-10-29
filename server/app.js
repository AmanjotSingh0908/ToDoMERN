const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('./router/toDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected")
}).catch(err => {
    throw err;
})

app.use(routes)

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))