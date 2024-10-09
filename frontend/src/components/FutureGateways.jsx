// src/components/FutureGetaways.js
import React from 'react';
import styled from 'styled-components';

const FutureGetaways = () => {
  const destinations = [
    "Arizona", "California", "London", "Barcelona", "Prague", "Scarborough"
    
  ];
  

  return (
    <GetawaysContainer>
      <h2>Inspiration for future getaways</h2>
      <p>Destinations for arts & culture</p>
      <LocationList>
        {destinations.map((location, index) => (
          <a href="#" key={index}>{location}</a>
        ))}
      </LocationList>
    </GetawaysContainer>
  );
};

export default FutureGetaways;

const GetawaysContainer = styled.div`
  padding: 40px;
  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
    color: gray;
  }
`;

const LocationList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
