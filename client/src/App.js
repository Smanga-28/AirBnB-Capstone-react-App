// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListingPage from './Listing/ListingPage';
import Login from './Login/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
