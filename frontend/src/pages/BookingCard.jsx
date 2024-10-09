import React from 'react';
import styled from 'styled-components';

const BookingCard = () => {
  return (
    <Card>
      <PriceSection>
        <span className="price">$75</span> / night
        <span className="rating">⭐ 5.0 · <a href="#">7 reviews</a></span>
      </PriceSection>
      <FormSection>
        <DateRow>
          <DateInput>
            <label>CHECK-IN</label>
            <input type="date" defaultValue="2022-02-19" />
          </DateInput>
          <DateInput>
            <label>CHECKOUT</label>
            <input type="date" defaultValue="2022-02-26" />
          </DateInput>
        </DateRow>
        <GuestsInput>
          <label>GUESTS</label>
          <select defaultValue="2">
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </GuestsInput>
        <ReserveButton>Reserve</ReserveButton>
        <InfoText>You won’t be charged yet</InfoText>
      </FormSection>
      <PriceBreakdown>
        <PriceRow>
          <span>$79 × 7 nights</span> <span>$555</span>
        </PriceRow>
        <PriceRow discount>
          <span>Weekly discount</span> <span>-$28</span>
        </PriceRow>
        <PriceRow>
          <span>Cleaning fee</span> <span>$62</span>
        </PriceRow>
        <PriceRow>
          <span>Service fee</span> <span>$83</span>
        </PriceRow>
        <PriceRow>
          <span>Occupancy taxes and fees</span> <span>$29</span>
        </PriceRow>
      </PriceBreakdown>
      <TotalRow>
        <span>Total</span> <span>$701</span>
      </TotalRow>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  font-family: Arial, sans-serif;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .price {
    font-size: 24px;
    font-weight: bold;
  }

  .rating {
    font-size: 14px;
    color: #555;
  }
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const DateRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  label {
    font-size: 12px;
    color: #555;
  }

  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const GuestsInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-size: 12px;
    color: #555;
  }

  select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const ReserveButton = styled.button`
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e64950;
  }
`;

const InfoText = styled.p`
  font-size: 12px;
  color: #555;
  text-align: center;
  margin-top: 10px;
`;

const PriceBreakdown = styled.div`
  border-top: 1px solid #ddd;
  margin-top: 20px;
  padding-top: 20px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: ${props => (props.discount ? 'green' : 'black')};
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid #ddd;
  margin-top: 20px;
  padding-top: 10px;
`;

export default BookingCard;
