const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path:'config.env'})

// CONNECTING TO THE DATABASE ----------------------------------------------------------------
const mongo_url = process.env.mongo_url
mongoose.connect(mongo_url)

const connectDB = async() =>{
    try{
        // mongodb connection string
        const con = await mongoose.connect(mongo_url);
        console.log('MongoDB database connected');

    }catch(err){
        console.log(err);
        process.exit(1); // exit from the process (1 = true )
        }
}
////////////////////////////////////////////////////////////////

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
