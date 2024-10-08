// src/components/Inspiration.js
import React from 'react';
import styled from 'styled-components';

const Inspiration = () => {
  const destinations = [
    { name: "Sandton City Hotel", distance: "53 km away", imgUrl: "https://sandtontimes.co.za/wp-content/uploads/2022/08/sandtontimes-sandton-towers-hotel-exterior-2000x1125-1.jpg" },
    { name: "Joburg City Hotel", distance: "168 km away", imgUrl: "https://www.doreebonner.co.uk/wp-content/uploads/2023/07/moving-to-johannesburg.jpg" },
    { name: "Woodmead Hotel", distance: "30 miles away", imgUrl: "https://images.trvl-media.com/lodging/35000000/34160000/34157500/34157423/4aa4f745.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium" },
    { name: "Hyde Park Hotel", distance: "34 km away", imgUrl: "https://cdn.audleytravel.com/3959/2826/79/1029099-cape-town.jpg" }
  ];

  return (
    <InspirationContainer>
      <h2>Inspiration for your next trip</h2>
      <Destinations>
        {destinations.map((dest, index) => (
          <Card key={index}>
            <img src={dest.imgUrl} alt={dest.name} />
            <div className="info">
              <h3>{dest.name}</h3>
              <p>{dest.distance}</p>
            </div>
          </Card>
        ))}
      </Destinations>
    </InspirationContainer>
  );
};

export default Inspiration;

const InspirationContainer = styled.div`
  padding: 40px;
 
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const Destinations = styled.div`
  display: flex;
  gap: 20px;
 
`;

const Card = styled.div`
  background-color: pink;
  border-radius: 15px;
  overflow: hidden;
  width: 800px;
  height:400px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .info {
    padding: 10px;
  }

  h3 {
    margin: 0;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: gray;
  }
`;
