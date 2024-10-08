const User = require("../models/user"); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 


//REGISRTER USER
exports.register = async (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body; 

    try{

        //CREATING A NEW MODEL OF THE REGISTERING USER
        const user = new User({name, email, password});
        await user.save();
        res.status(201).json({message: 'User registered successfully!!'});

    }catch(error){
        res.status(401).json({error: error.message});
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email}); 
        
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({error: "INVALID CREDENTIALS"});
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({ token });
    } catch (error) {
        return res.status(401).json({error: error.message});
    }
}