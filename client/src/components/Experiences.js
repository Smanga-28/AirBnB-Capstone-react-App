// src/components/Experiences.js
import React from 'react';
import styled from 'styled-components';

const Experiences = () => {
  return (
    <ExperiencesContainer>
      <h2>Discover Airbnb Experiences</h2>
      
      <ExperienceCards>
        <Card>
          <img src="https://capetowndaytours.checkfront.com/media/Lcat-3.jpg" alt="On Trip" />
          
            <h3>Things to do on your trip</h3>
            <button>Experiences</button>
         
        </Card>
        <Card>
          <img src="https://media.architecturaldigest.com/photos/62fab6f1fe01a6057290685e/1:1/w_960,c_limit/GettyImages-482989593.jpg" alt="Online" />
          
            <h3>Things to do from home</h3>
            <button>Online Experiences</button>
         
        </Card>
         <Card>
          <img src="https://media.architecturaldigest.com/photos/62fab6f1fe01a6057290685e/1:1/w_960,c_limit/GettyImages-482989593.jpg" alt="Online" />
          
            <h3>Things to do from home</h3>
            <button>Online Experiences</button>
         
        </Card>
      </ExperienceCards>

      <GiftCardSection>
      <GiftCardText>
        <h2>Shop Airbnb gift cards</h2>
        <button>Learn more</button>
      </GiftCardText>
      <img src="https://www.refinery29.com/images/11286883.png?format=webp&width=NaN&height=NaN&quality=85" alt="Gift Cards" />
    </GiftCardSection>

    <HostingContainer>
      <img src="https://c0.wallpaperflare.com/preview/131/406/448/sunlight-happy-smiling-girl.jpg" alt="Host" />
      <div className="info">
        <h2>Questions about hosting?</h2>
        <button>Ask a Superhost</button>
      </div>
    </HostingContainer>
    </ExperiencesContainer>

    
  );
};

export default Experiences;

const ExperiencesContainer = styled.div`
  padding: 40px;
  text-align:center;
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const ExperienceCards = styled.div`
  display: flex;
  gap: 20px;
  text-align:center;
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  border-radius: 15px;
  overflow: hidden;
  text-align:center;
  img {
    width:100%;
    height: 400px;
    object-fit: cover;
    text-align:center;
  }

 

    h3 {
      margin: 0;
      font-size: 22px;
      position: absolute;
      top: 60%;
      left: 40%; 
      transform: translate(-50%, -50%);
      color:white;
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      text-align:center;
      border: none;
      border-radius: 20px;
      color: white;
      cursor: pointer;
      background-color:#ff385c;
      position: absolute;
      top: 70%;
      left: 30%; 
  transform: translate(-50%, -50%);
    }
  
`;

//Cardsection
const GiftCardSection = styled.div`
display: flex;
justify-content: space-between;
padding: 40px;
align-items: center;

h2 {
  margin: 0;
}

button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  border-radius:12px;
}

img {
  width: 700px;
  height:300px;
  border-radius:15px;
  background-color:white;
}
`;

const GiftCardText = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;


//Hosting
const HostingContainer = styled.div`
  display: flex;
  position: relative;
  padding: 40px;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
  }

  .info {
    position: absolute;
   
    bottom: 20px;
    color: white;
    left: 10%;
     

    h2 {
      font-size: 24px;
      left: 50%;
      bottom: 400px;
    }

    button {
      padding: 10px 10px;
      background-color:whit;
      color:black;
      cursor: pointer;
      position: absolute;
      top: -200%;
      left: 50%; 
 
    border-radius:15px;
    }
  }
`;