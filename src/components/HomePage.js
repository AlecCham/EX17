import React from 'react';
import image27 from '../27.jpg'; // Adjust the path as necessary

const HomePage = () => {
    const mainStyle = {
        flex: 1,
        paddingTop: '5rem',
        backgroundImage: `url(${image27})`, // Corrected backgroundImage property
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'chocolate'
    };

    return (
        <main style={mainStyle}>
            <div className="container mt-5 pt-5">
                <div className="content-section">
                    <h2>Welcome to Little Village</h2>
                    <p>Discover a place where community flourishes and the joy of discovery never ends. Little Village is more than a marketplace; it's a haven for those who seek connection, quality products, and unforgettable experiences.</p>
                </div>
              
                <div className="content-section">
                    <h2>Our Products</h2>
                    <p>From locally-sourced fresh produce to handcrafted goods, our stalls are brimming with treasures waiting to be uncovered. Each product tells a story of tradition, craftsmanship, and sustainability.</p>
                </div>
              
                <div className="content-section">
                    <h2>Join Our Community</h2>
                    <p>At Little Village, every visit is an opportunity to connect, learn, and grow. Join us for community events, workshops, and celebrations that bring us all closer together.</p>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
