const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Apartment = require('./models/bnb'); 


dotenv.config();

const apartments = [

  { city: 'Cape Town', type: 'private', guests: 2, bedrooms: 4, bathrooms: 3, rating: 4.5 },
  { city: 'Cape Town', type: 'private', guests: 4, bedrooms: 3, bathrooms: 2, rating: 4.0 },
  { city: 'Durban', type: 'shared', guests: 2, bedrooms: 2, bathrooms: 1, rating: 4.8 },
  { city: 'Durban', type: 'private', guests: 3, bedrooms: 1, bathrooms: 1, rating: 4.2 },
  { city: 'Eastern Cape', type: 'private', guests: 6, bedrooms: 5, bathrooms: 4, rating: 4.9 },
  { city: 'Pretoria', type: 'shared', guests: 2, bedrooms: 2, bathrooms: 1, rating: 4.0 },
  { city: 'Cape Town', type: 'whole apartment', guests: 1, bedrooms: 4, bathrooms: 3, rating: 4.5 },
  { city: 'Cape Town', type: 'shared', guests: 4, bedrooms: 1, bathrooms: 2, rating: 4.0 },
  { city: 'Durban', type: 'whole apartment', guests: 2, bedrooms: 1, bathrooms: 1, rating: 4.8 },

];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    
    await Apartment.deleteMany({}); // Clear existing apartments

    await Apartment.insertMany(apartments); // Insert new apartments
    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
