import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Main Homepage Component
const Homepage = () => {
  return (
    <HomePage>
      <HeaderContainer>
        <Logo>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Airbnb Logo"
          />
        </Logo>
        <NavLinks>
          <a href="#">Places to stay</a>
          <a href="#">Experiences</a>
          <a href="#">Online Experiences</a>
        </NavLinks>
        <ProfileSection>
          <BecomeHost href="#">
            Become a Host
          </BecomeHost>
          <GlobeIcon>🌐</GlobeIcon>
          <ProfileIcon>
            <MenuIcon>☰</MenuIcon>
            <Avatar src="https://i.pravatar.cc/40" alt="Profile" />
          </ProfileIcon>
        </ProfileSection>
      </HeaderContainer>

      <SearchBarContainer>
        <SearchOption>
          <span>Hotels</span>
          <InputContainer>
            <input type="text" placeholder="Select Hotel" />
            <DropdownIcon>
              <FontAwesomeIcon icon={faChevronDown} />
            </DropdownIcon>
          </InputContainer>
        </SearchOption>
        <SearchOption>
          <span>Check in</span>
          <input type="text" placeholder="Add dates" />
        </SearchOption>
        <SearchOption>
          <span>Check out</span>
          <input type="text" placeholder="Add dates" />
        </SearchOption>
        <SearchOption>
          <span>Guests</span>
          <input type="text" placeholder="Add guests" />
        </SearchOption>
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchBarContainer>

      <BannerContainer>
        <BannerContent>
          <h1>Not sure where to go? Perfect.</h1>
          <BannerButton>I'm flexible</BannerButton>
        </BannerContent>
      </BannerContainer>
    </HomePage>
  );
};

export default Homepage;

// Styles using styled-components

// Header Styles
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: black;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  overflow-y:hidden;
`;

const Logo = styled.div`
  img {
    height: 30px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const BecomeHost = styled.a`
  color: white;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const GlobeIcon = styled.div`
  margin-right: 20px;
  font-size: 20px;
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuIcon = styled.div`
  font-size: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

// SearchBar Styles
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: fit-content;
  gap: 0px;
`;

const SearchOption = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;

  span {
    font-size: 12px;
    color: gray;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const DropdownIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: gray;
`;

const SearchButton = styled.button`
  background-color: #ff385c;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
`;

const HomePage = styled.div`
  background-color: black;
`;

//Banner
const BannerContainer = styled.div`
  background-image: url("https://assets3.thrillist.com/v1/image/3113269/1584x1054/crop;webp=auto;jpeg_quality=60.jpg");
  background-position: center;
  background-size: cover;
  background-color: black;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
`;

const BannerContent = styled.div`
  text-align: center;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 30px;
  }
`;

const BannerButton = styled.button`
  background-color: #ff385c;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e31b5f;
  }
`;
