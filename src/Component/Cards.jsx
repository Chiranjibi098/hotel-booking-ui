import React from 'react';
import '../assets/CSS/HotelCard.css';

const HotelCard = ({ image, name, rating, description }) => {
  return (
    <div className="hotel-card">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="info">
        <h2>{name}</h2>
        <p className='rating'>{rating}</p>
        <p>{description}</p>
        <button>Book now</button>
      </div>
    </div>
  );
};

export default HotelCard;
