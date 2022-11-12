const express = require('express')
const app = express()
const dotenv = require('dotenv')
const database = require('./database/connection')

dotenv.config({path:'config.env'})

// Database connection
database();

// Middleware ----------------------------------------------------------------
app.use(express.json())


// Listen to the server ------------------------------------
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("Server listening on port: " + PORT);
});


// Import routes ---------------------------------
const userRoute = require('./routes/user')
app.use('/user', userRoute)
