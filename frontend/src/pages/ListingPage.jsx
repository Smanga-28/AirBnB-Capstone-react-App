import React, { useState } from 'react';
import { FaWifi, FaDog, FaLeaf, FaLock, FaUtensils, FaTshirt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import Font Awesome icons
import styled from 'styled-components';
import Calendar from 'react-calendar'; // Assuming you are using 'react-calendar'
import 'react-calendar/dist/Calendar.css';

// BookingCard Component
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

// ListingPage Component
const ListingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MainContainer>
      <ContentContainer>
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
      </ContentContainer>

      {/* Booking Card Section */}
      <BookingCardContainer>
        <BookingCard />
      </BookingCardContainer>

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
              <IconLink href="#"><FaFacebook /></IconLink>
              <IconLink href="#"><FaTwitter /></IconLink>
              <IconLink href="#"><FaInstagram /></IconLink>
            </FooterIcons>
          </FooterBottomRight>
        </FooterBottom>
      </FooterWrapper>
    </MainContainer>
  );
};

// Styled Components
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px; // Margin to create space between main content and booking card
`;

const BookingCardContainer = styled.div`
  width: 300px; // Set a fixed width for the booking card
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  img {
    height: 40px;
  }
`;

const NavLinks = styled.nav`
  a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const BecomeHost = styled.a`
  margin-right: 15px;
  text-decoration: none;
  color: #333;
`;

const GlobeIcon = styled.span`
  margin-right: 15px;
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.span`
  margin-right: 5px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const GalleryContainer = styled.div`
  margin: 20px 0;
`;

const MainImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const BookingSection = styled.section`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
`;

const Details = styled.p`
  color: #555;
`;

const Price = styled.p`
  font-size: 24px;
`;

const CalendarContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #ff385c;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const DetailsSection = styled.section`
  margin-top: 20px;
`;

const ReviewsSection = styled.section`
  margin-top: 20px;
`;

const Review = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewerDetails = styled.div`
  margin-left: 10px;
`;

const ReviewText = styled.p`
  margin: 0;
`;

const HostSection = styled.section`
  margin-top: 20px;
`;

const HostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactButton = styled.button`
  padding: 10px;
  background-color: #ff385c;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const FooterWrapper = styled.footer`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const FooterTitle = styled.h4`
  font-weight: bold;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin: 5px 0;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #333;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FooterBottomText = styled.p`
  margin: 0;
`;

const FooterBottomRight = styled.div`
  display: flex;
  align-items: center;
`;

const FooterIcons = styled.div`
  display: flex;
  margin-left: 10px;
`;

const IconLink = styled.a`
  margin-left: 10px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .price {
    font-size: 24px;
  }

  .rating {
    font-size: 14px;
    color: #555;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateInput = styled.div`
  flex: 1;
  margin-right: 10px;

  label {
    display: block;
    margin-bottom: 5px;
  }
`;

const GuestsInput = styled.div`
  margin: 10px 0;

  label {
    display: block;
    margin-bottom: 5px;
  }
`;

const ReserveButton = styled.button`
  padding: 10px;
  background-color: #ff385c;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const InfoText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const PriceBreakdown = styled.div`
  margin-top: 20px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  &.discount {
    color: red;
  }
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: bold;
`;

export default ListingPage;
