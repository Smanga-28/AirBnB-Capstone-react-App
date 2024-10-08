import React, { useState } from 'react';
import { FaWifi, FaDog, FaLeaf, FaLock, FaUtensils, FaTshirt,FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa'; // Import Font Awesome icons
import styled from 'styled-components';
import Calendar from 'react-calendar'; // Assuming you are using 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const ListingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MainContainer>
      {/* Header Section */}
      <HeaderContainer>
        <Logo>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb Logo" />
        </Logo>
        <NavLinks>
          <a href="#">Start your search</a>
        </NavLinks>
        <ProfileSection>
          <BecomeHost href="#">Become a Host</BecomeHost>
          <GlobeIcon>🌐</GlobeIcon>
          <ProfileIcon>
            <MenuIcon>☰</MenuIcon>
            <Avatar src="https://i.pravatar.cc/40" alt="Profile" />
          </ProfileIcon>
        </ProfileSection>
      </HeaderContainer>

      {/* Image Gallery Section */}
      <GalleryContainer>
        <MainImage src="https://capetown.hotelguide.co.za/images/cape-town-beach-hotels-fp-555x322.jpg" alt="Main Image" />
        <GalleryGrid>
          <Image src="https://capetown.hotelguide.co.za/images/cape-town-beach-hotels-fp-555x322.jpg" alt="Image 1" />
          <Image src="https://capetown.hotelguide.co.za/images/cape-town-beach-hotels-fp-555x322.jpg" alt="Image 2" />
          <Image src="https://capetown.hotelguide.co.za/images/cape-town-beach-hotels-fp-555x322.jpg" alt="Image 3" />
          <Image src="https://capetown.hotelguide.co.za/images/cape-town-beach-hotels-fp-555x322.jpg" alt="Image 4" />
        </GalleryGrid>
      </GalleryContainer>

      {/* Booking Section */}
      <BookingSection>
        <Title>Bordeaux Getaway</Title>
        <Subtitle>Entire rental unit hosted by Ghazal</Subtitle>
        <Details>
          <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>
          <p>Free cancellation before Feb 14</p>
        </Details>
        <Price><strong>$75</strong> / night</Price>

        {/* Calendar Section */}
        <CalendarContainer>
          <Calendar onChange={handleDateChange} value={selectedDate} />
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </CalendarContainer>
        <Button>Reserve</Button>
      </BookingSection>

      {/* Property Details Section */}
      <DetailsSection>
      <h2>What this place offers</h2>
      <ul>
        <li><FaWifi /> Wifi</li>
        <li><FaUtensils /> Kitchen</li>
        <li><FaTshirt /> Free washer - in building</li>
        <li><FaDog /> Pets allowed</li>
        <li><FaLeaf /> Garden view</li>
        <li><FaLock /> Security cameras on property</li>
      </ul>
    </DetailsSection>

      {/* Reviews Section */}
      <ReviewsSection>
        <h3>5.0 · 7 Reviews</h3>
        <Review>
          <Reviewer>
            <img src="https://via.placeholder.com/40" alt="Reviewer 1" />
            <ReviewerDetails>
              <h4>Jose</h4>
              <p>December 2021</p>
            </ReviewerDetails>
          </Reviewer>
          <ReviewText>Host was very attentive and the place is in a great location!</ReviewText>
        </Review>
        <Review>
          <Reviewer>
            <img src="https://via.placeholder.com/40" alt="Reviewer 2" />
            <ReviewerDetails>
              <h4>Shayna</h4>
              <p>December 2021</p>
            </ReviewerDetails>
          </Reviewer>
          <ReviewText>Super comfortable bed. Great host, very helpful and responsive.</ReviewText>
        </Review>
      </ReviewsSection>

      {/* Host Section */}
      <HostSection>
        <h3>Hosted by Ghazal</h3>
        <HostDetails>
          <p>Superhost · Response time: within an hour</p>
          <ContactButton>Contact Host</ContactButton>
        </HostDetails>
      </HostSection>

      {/* Footer Section */}
      <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="#">Help Center</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Safety information</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Cancellation options</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Our COVID-19 Response</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Supporting people with disabilities</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Report a neighborhood concern</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Community</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="#">Airbnb.org: disaster relief housing</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Support: Afghan refugees</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Celebrating diversity & belonging</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Combating discrimination</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Hosting</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="#">Try hosting</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">AirCover: protection for Hosts</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Explore hosting resources</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Visit our community forum</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">How to host responsibly</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>About</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="#">Newsroom</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Learn about new features</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Letter from our founders</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Careers</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Investors</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Airbnb Luxe</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterContainer>

      <FooterBottom>
        <FooterBottomText>&copy; 2022 Airbnb, Inc. · <FooterLink href="#">Privacy</FooterLink> · <FooterLink href="#">Terms</FooterLink> · <FooterLink href="#">Sitemap</FooterLink></FooterBottomText>
        <FooterBottomRight>
          <span>English (US)</span>
          <span>$ USD</span>
          <FooterIcons>
            <IconLink href="#"><i className="fab fa-facebook"> <FaFacebook /></i></IconLink>
            <IconLink href="#"><i className="fab fa-twitter"><FaTwitter/></i></IconLink>
            <IconLink href="#"><i className="fab fa-instagram"><FaInstagram/></i></IconLink>
          </FooterIcons>
        </FooterBottomRight>
      </FooterBottom>
    </FooterWrapper>
  

    </MainContainer>
  );
};

export default ListingPage;

// Styled Components
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.div`
  img {
    width: 100px;
  }
`;

const NavLinks = styled.nav`
  a {
    font-size: 16px;
    text-decoration: none;
    color: #333;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const BecomeHost = styled.a`
  margin-right: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
`;

const GlobeIcon = styled.span`
  margin-right: 20px;
  font-size: 20px;
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.span`
  margin-right: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const GalleryContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const MainImage = styled.img`
  width: 60%;
  border-radius: 10px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const BookingSection = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
`;

const Details = styled.div`
  font-size: 14px;
  color: #555;
`;

const Price = styled.p`
  font-size: 22px;
  margin-top: 20px;
`;

const CalendarContainer = styled.div`

  display: flex; /* Enables flexbox layout */
  gap: 30px;  /* Distributes space between items */


  flex: 1; /* Each calendar takes equal space */
  margin: 10px; /* Adds some spacing around each calendar */

`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
`;



const ReviewsSection = styled.div`
  margin-top: 40px;
  h3 {
    font-size: 18px;
  }
`;

const Review = styled.div`
  margin-top: 10px;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const ReviewerDetails = styled.div`
  margin-left: 10px;
  h4 {
    margin: 0;
    font-size: 14px;
  }
  p {
    margin: 0;
    font-size: 12px;
    color: #777;
  }
`;

const ReviewText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const HostSection = styled.div`
  margin-top: 40px;
`;

const HostDetails = styled.div`
  font-size: 14px;
  color: #777;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
`;



const FooterContent = styled.div`
  font-size: 14px;
  color: #777;
`;

const DetailsSection = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 18px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      font-size: 14px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      gap: 10px; /* Adds space between icon and text */
    }
  }
`;


const FooterWrapper = styled.footer`
  background-color: #f7f7f7;
  padding: 40px 0;
  border-top: 1px solid #ddd;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const FooterTitle = styled.h4`
  margin-bottom: 10px;
  color: #333;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 8px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #333;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterBottomText = styled.p`
  color: #666;
`;

const FooterBottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const IconLink = styled.a`
  font-size: 20px;
  color: #333;
  
  &:hover {
    color: #ff385c; /* Airbnb's pink color */
  }
`;