const mongoose = require('mongoose'); 
const dotenv = require('dotenv');

//LOAD ENVIRONMENT VARIABLE FROM .ENV FILE
dotenv.config();

const connectDb = async () => {
    try {

        //USE THE VARIABLE FOR THE MONGODB CONNECTION STRING
       const conn =  await mongoose.connect(process.env.MONGO_URL); 
        console.log(`MONGO CONNECTED !!!: ${conn.connection.host}`);
        
    } catch (error) {
        console.error("ERROR:" , error.message); 
        process.exit(1);
    }
}; 

module.exports = connectDb;