const Bnb = require('../models/bnb'); 

//GET ALL BNB'S WITH OPTIONAL FILTERING BY CITY OR GUEST COUNT
exports.getBnbs = async (req, res) => {
    const {city, guest} = req.query; 
    const filter = {}; 

    if(city) filter.city = city; 
    if(guest) filter.guest = {Sgte: guest}; 

    try {

        const bnbs = await Bnb.find(filter);
        res.json(bnbs);

    } catch(error) {
        res.status(401).json({error: error.message});
    }
}