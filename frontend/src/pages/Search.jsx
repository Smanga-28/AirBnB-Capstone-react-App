import React from 'react';


function Search() {
  return (
    <div className="app">
      <Header />
    
      <Filters />
      <div className="listings">
        <Listing
          title="Bordeaux Getaway"
          price="$325/night"
          reviews="318 reviews"
          image="https://secure.s.forbestravelguide.com/img/properties/taj-cape-town/taj-cape-town-luxury-king-mountain-tower.jpg"
          guests="4-6 guests"
          beds="5 beds"
          baths="3 baths"
        />
        <Listing
          title="Charming Waterfront Condo"
          price="$200/night"
          reviews="318 reviews"
          image="https://secure.s.forbestravelguide.com/img/properties/taj-cape-town/taj-cape-town-luxury-king-mountain-tower.jpg"
          guests="4-6 guests"
          beds="5 beds"
          baths="3 baths"
        />
      </div>
    </div>
  );
}

// Header Component with Airbnb Logo, Search Bar, and Menu Options
function Header() {
  return (
    <div style={headerStyle}>
      <div style={logoContainerStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/640px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="Airbnb Logo"
          style={logoStyle}
        />
      </div>
      <div style={headerSearchBarStyle}>
        <input type="text" placeholder="Bordeaux" style={headerInputStyle} />
        <input type="text" placeholder="Feb 19-26" style={headerInputStyle} />
        <input type="text" placeholder="2 guests" style={headerInputStyle} />
        <button style={headerButtonStyle}>Search</button>
      </div>
      <div style={headerRightStyle}>
        <button style={hostButtonStyle}>Become a Host</button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
          alt="Login Icon"
          style={loginIconStyle}
        />
        <button style={menuButtonStyle}>☰</button>
      </div>
    </div>
  );
}



function Filters() {
  return (
    <div style={filtersStyle}>
      <button style={filterButtonStyle}>Price</button>
      <button style={filterButtonStyle}>Type of Place</button>
      <button style={filterButtonStyle}>Free Cancellation</button>
      <button style={filterButtonStyle}>Wifi</button>
      <button style={filterButtonStyle}>Kitchen</button>
      <button style={filterButtonStyle}>Free Parking</button>
      <button style={filterButtonStyle}>More Filters</button>
    </div>
  );
}

function Listing({ title, price, reviews, image, guests, beds, baths }) {
  return (
    <div style={listingStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <div style={detailsStyle}>
        <h2>{title}</h2>
        <p>{guests} • {beds} • {baths}</p>
        <p>{price}</p>
        <p>{reviews}</p>
      </div>
    </div>
  );
}

// Inline Styles for Header and Components
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: 'white',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: '0',
  zIndex: '100',
};

const logoContainerStyle = {
  flex: '1',
};

const logoStyle = {
  width: '100px',
};

const headerSearchBarStyle = {
  display: 'flex',
  flex: '3',
  justifyContent: 'center',
  gap: '10px',
};

const headerInputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '150px',
};

const headerButtonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#ff385c',
  color: 'white',
  cursor: 'pointer',
};

const headerRightStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const hostButtonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const loginIconStyle = {
  width: '30px',
  height: '30px',
};

const menuButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
};

const searchBarStyle = {
  display: 'flex',
  gap: '10px',
  padding: '10px',
  backgroundColor: 'white',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '150px',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#ff385c',
  color: 'white',
  cursor: 'pointer',
};

const filtersStyle = {
  display: 'flex',
  gap: '10px',
  padding: '10px',
  backgroundColor: 'white',
  marginBottom: '20px',
};

const filterButtonStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: 'white',
  cursor: 'pointer',
};

const listingStyle = {
  display: 'flex',
  gap: '20px',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: 'white',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const imageStyle = {
  width: '150px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '10px',
};

const detailsStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export default Search;
