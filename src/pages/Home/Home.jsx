// Home.jsx
import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/NavBar/NavBar';
import BottomBar from '../../components/BottomBar/BottomBar';
import Listing from '../../components/Listing/Listing';

const Home = () => {
    /*const [markdown, setMarkdown] = useState(''); // Manage markdown state here*/

    return (
        <>
            <Navbar />
            <div className="listing-grid">
                <Listing
                    photo="https://via.placeholder.com/250"
                    name="Forest Green Hoodie"
                    description="A cozy hoodie perfect for outdoor adventures."
                />
                <Listing
                    photo="https://via.placeholder.com/250"
                    name="Classic Brown T-Shirt"
                    description="Soft, comfortable, and sustainably made."
                />
                <Listing
                    photo="https://via.placeholder.com/250"
                    name="Comfy Joggers"
                    description="Stylish and versatile, ideal for all-day wear."
                />
            </div>
            <BottomBar />
        </>
    );
};

export default Home;