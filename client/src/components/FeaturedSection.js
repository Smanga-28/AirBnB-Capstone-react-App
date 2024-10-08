// src/components/FeaturedSection.js
import React from 'react';
import styled from 'styled-components';

const FeaturedSection = () => {
  return (
    <SectionContainer>
      <h2>Live anywhere</h2>
      <CardGrid>
        <Card>
          <img src="https://source.unsplash.com/800x600/?house" alt="Entire homes" />
          <p>Entire homes</p>
        </Card>
        <Card>
          <img src="https://source.unsplash.com/800x600/?apartment" alt="Apartments" />
          <p>Apartments</p>
        </Card>
        <Card>
          <img src="https://source.unsplash.com/800x600/?cabin" alt="Cabins" />
          <p>Cabins</p>
        </Card>
        <Card>
          <img src="https://source.unsplash.com/800x600/?hotel" alt="Unique stays" />
          <p>Unique stays</p>
        </Card>
      </CardGrid>
    </SectionContainer>
  );
};

export default FeaturedSection;

const SectionContainer = styled.div`
  margin: 50px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }

  p {
    margin: 10px 0;
  }
`;
