// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';


// Styled Components for Footer
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

// Footer Component
const Footer = () => {
  return (
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
  );
}

export default Footer;
