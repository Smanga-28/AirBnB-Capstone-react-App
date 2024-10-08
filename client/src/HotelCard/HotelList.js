import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can use fetch as well

// Individual Hotel Card
function HotelCard({ hotel }) {
  return (
    <div style={styles.hotelCard}>
      <div style={styles.hotelImage}>
        <img src={hotel.img} alt={hotel.name} style={styles.img} />
      </div>
      <div style={styles.hotelInfo}>
        <h2>{hotel.name}</h2>
        <p>{hotel.guests} guests · {hotel.bedrooms} beds · {hotel.bathrooms} bath</p>
        <p>{hotel.amenities}</p>
        <p style={styles.rating}>{hotel.rating} ★</p>
      </div>
      <div style={styles.priceUpdate}>
        <span style={styles.price}>${hotel.price} / night</span>
        <button style={styles.update}>Update</button>
        <button style={styles.delete}>Delete</button>
      </div>
    </div>
  );
}

// Main HotelList Component
function HotelList() {
  const [hotels, setHotels] = useState([]); // Use state to store hotel data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch the BnB listings when the component mounts
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bnbs'); // Update to your API URL
        setHotels(response.data); // Store data in the state
        setLoading(false); // Turn off loading
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setLoading(false); // Turn off loading
      }
    };

    fetchHotels();
  }, []);

  // Render loading state or hotel list
  if (loading) {
    return <div>Loading...</div>;
  }

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
            <HotelCard key={hotel._id} hotel={hotel} /> 
          ))}
        </section>
      </main>
    </div>
  );
}

// Styles Object (unchanged)
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
