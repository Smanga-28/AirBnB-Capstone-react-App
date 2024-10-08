// src/components/Home.js
import React from 'react';
import Inspiration from './Inspiration';
import Experiences from './Experiences';
import FutureGetaways from './FutureGetaways';
import Footer from './Footer';
import Homepage from './Homepage';
import HotelList from '../HotelCard/HotelList';
import ListingPage from '../Listing/ListingPage';
import Search from '../Search/Search';


const Home = () => {
  return (
    <div>
     <Homepage/>
     
      <Inspiration />
      <Experiences />
    
    
      <FutureGetaways />
      <Footer/>
   

    </div>
  );
};

export default Home;
