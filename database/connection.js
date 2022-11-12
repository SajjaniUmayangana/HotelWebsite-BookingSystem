// CONNECTING TO THE DATABASE
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path:'config.env'})


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

module.exports = connectDB

