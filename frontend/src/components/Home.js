// src/components/Home.js
import React from 'react';

// Home component that displays the main content of the homepage
const Home = () => {
    return (
        <div id="main-content">
            <div id="alert-box">
                <h1>Amber Alert!!!</h1> {/* Alert title */}
                <p id="alert-message">This is an Amber Alert notification.</p> {/* Alert message */}
            </div>
        </div>
    );
};

export default Home; // Export Home component

