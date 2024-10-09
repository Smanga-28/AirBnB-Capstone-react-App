const express = require("express"); 
const dotenv = require("dotenv"); 
const cors = require("cors");
const connectDb = require("./config/db"); 

const authRoutes = require('./routes/authRouter'); 
const bnbRoutes = require('./routes/bnbRoute');

dotenv.config(); 
connectDb(); 

const app = express(); 
app.use(express.json()); 
app.use(cors());

//ROUTES 
app.use('/api/auth', authRoutes); 
app.use('/api/bnbs', bnbRoutes);



const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log`SERVER RUNNING ON PORT:${PORT}`);