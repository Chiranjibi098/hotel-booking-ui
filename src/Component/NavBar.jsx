import React, { useState } from 'react';
import { FiHome } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { TbHotelService } from "react-icons/tb";
import "../assets/CSS/Navbar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobile(false); // Close mobile menu on link click
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">goforit</div>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                <div className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')}>
                    <div className='icons'><FiHome /></div>
                    <div><Link to="/">Home</Link></div>
                </div>
                <div className={`nav-item ${activeLink === 'Rooms' ? 'active' : ''}`} onClick={() => handleLinkClick('Rooms')}>
                    <div className='icons'><MdOutlineBedroomParent /></div>
                    <div><Link>Rooms</Link></div>
                </div>
                <div className={`nav-item ${activeLink === 'Services' ? 'active' : ''}`} onClick={() => handleLinkClick('Services')}>
                    <div className='icons'><TbHotelService /></div>
                    <div><Link >Services</Link></div>
                </div>
                <div className={`nav-item ${activeLink === 'About' ? 'active' : ''}`} onClick={() => handleLinkClick('About')}>
                    <div><Link >About</Link></div>
                </div>
                <div className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`} onClick={() => handleLinkClick('Contact')}>
                    <div className='icons'><MdSupportAgent /></div>
                    <div><Link >Contact</Link></div>
                </div>
            </ul>
            <button className="mobile-menu-icon" onClick={handleToggle}>
                {isMobile ? <MdOutlineRestaurantMenu /> : <IoIosMenu />}
            </button>
        </nav>
    );
};

export default NavBar;
