import React from 'react';

// Hotel Data
const hotels = [
  {
    id: 1,
    name: 'Sandton City Hotel',
    guests: '4-6 guests · Entire Home · 3 beds · 3 bath',
    amenities: 'Wifi · Kitchen · Free Parking',
    rating: 5.0,
    reviews: 318,
    price: '$325 / night',
    img: 'https://insideguide.co.za/cape-town/app/uploads/2020/10/tintswalo-atlantic-hotel-cape-town-view.jpg' 
  },
  {
    id: 2,
    name: 'Woodmead City Hotel',
    guests: '4-6 guests · Entire Home · 5 beds · 3 bath',
    amenities: 'Wifi · Kitchen · Free Parking',
    rating: 5.0,
    reviews: 318,
    price: '$400 / night',
    img: 'https://insideguide.co.za/cape-town/app/uploads/2020/10/tintswalo-atlantic-hotel-cape-town-view.jpg' 
  },
  {
    id: 3,
    name: 'Historic City Center Home',
    guests: '4-6 guests · Entire Home · 5 beds · 3 bath',
    amenities: 'Wifi · Kitchen · Free Parking',
    rating: 5.0,
    reviews: 318,
    price: '$125 / night',
    img: 'https://insideguide.co.za/cape-town/app/uploads/2020/10/tintswalo-atlantic-hotel-cape-town-view.jpg' 
  }
];

// Individual Hotel Card
function HotelCard({ hotel }) {
  return (
    <div style={styles.hotelCard}>
      <div style={styles.hotelImage}>
        <img src={hotel.img} alt={hotel.name} style={styles.img} />
      </div>
      <div style={styles.hotelInfo}>
        <h2>{hotel.name}</h2>
        <p>{hotel.guests}</p>
        <p>{hotel.amenities}</p>
        <p style={styles.rating}>{hotel.rating} ★ ({hotel.reviews} reviews)</p>
      </div>
      <div style={styles.priceUpdate}>
        <span style={styles.price}>{hotel.price}</span>
        <button style={styles.update}>Update</button>
        <button style={styles.delete}>Delete</button>
      </div>
    </div>
  );
}

// Main App Component
function HotelList() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.navbar}>
          <div style={styles.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb Logo" style={styles.logoImg} />
          </div>
          <div style={styles.actions}>
            <button style={styles.navButton}>View Reservations</button>
            <button style={styles.navButton}>View Listings</button>
            <button style={styles.navButton}>Create Listing</button>
          </div>
          <div style={styles.profile}>
            <span>John Doe</span>
            <div style={styles.menuIcon}>☰</div>
          </div>
        </div>
      </header>
      <main>
        <h1 style={styles.heading}>My Hotel List</h1>
        <section style={styles.hotelList}>
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </section>
      </main>
    </div>
  );
}

// Styles Object
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: '120px',
  },
  logoImg: {
    width: '100%',
  },
  actions: {
    display: 'flex',
  },
  navButton: {
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: '24px',
  },
  heading: {
    margin: '20px 0',
    textAlign: 'center',
  },
  hotelList: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  hotelCard: {
    display: 'flex',
    backgroundColor: 'white',
    margin: '20px 0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hotelImage: {
    width: '150px',
    height: '100px',
    borderRadius: '10px',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  },
  hotelInfo: {
    flexGrow: 1,
    marginLeft: '20px',
  },
  rating: {
    color: '#ff9900',
  },
  priceUpdate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  update: {
    padding: '10px 20px',
    margin: '5px 0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
  },
  delete: {
    padding: '10px 20px',
    margin: '5px 0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#ff4d4d',
    color: 'white',
  },
};

export default HotelList;
