const express = require('express'); 
const { getBnbs } = require('../controllers/bnbController'); 
const router = express.Router(); 


//FETCH BNB'S WITH FILTERS
router.get('/', getBnbs);

module.exports = router; 