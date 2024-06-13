import React from "react";
import NavBar from "../Component/NavBar";
import HotelCard from "../Component/Cards";
import hotel from "../assets/Images/235514.png";
import Hotellist from "../Component/Hotellist";
import "../assets/CSS/Landing.css";
import Footer from "../Component/Footer";

function Landing() {
  const dummyData = [
    {
      image: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Hotel Sunshine',
      rating: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 20" width="102" height="20">
        < defs >
          <linearGradient id="half">
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#ccc" />
          </linearGradient>
        </defs >
        <g>
          <path d="M10 1l2.99 6.07L20 7.67l-4.5 4.38 1.06 6.12L10 15.34l-5.57 2.83L5.5 12.05 1 7.67l7.01-1.6L10 1z" fill="#FFD700" />
          <path d="M30 1l2.99 6.07L40 7.67l-4.5 4.38 1.06 6.12L30 15.34l-5.57 2.83L25.5 12.05 21 7.67l7.01-1.6L30 1z" fill="#FFD700" />
          <path d="M50 1l2.99 6.07L60 7.67l-4.5 4.38 1.06 6.12L50 15.34l-5.57 2.83L45.5 12.05 41 7.67l7.01-1.6L50 1z" fill="#FFD700" />
          <path d="M70 1l2.99 6.07L80 7.67l-4.5 4.38 1.06 6.12L70 15.34l-5.57 2.83L65.5 12.05 61 7.67l7.01-1.6L70 1z" fill="#FFD700" />
          <path d="M90 1l2.99 6.07L100 7.67l-4.5 4.38 1.06 6.12L90 15.34l-5.57 2.83L85.5 12.05 81 7.67l7.01-1.6L90 1z" fill="url(#half)" />
        </g>
      </svg >),
      description: 'Nestled in the heart of the city, Hotel Tranquility offers a serene retreat from the bustling urban life. With luxurious rooms, a rooftop infinity pool, and gourmet dining options, this hotel promises an unforgettable stay. Guests can unwind at the state-of-the-art spa or explore nearby attractions, making it an ideal choice for both leisure and business travelers.'
    }
  ];
  const HotelList = {

    rateing: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 20" width="102" height="20">
      < defs >
        <linearGradient id="half">
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#ccc" />
        </linearGradient>
      </defs >
      <g>
        <path d="M10 1l2.99 6.07L20 7.67l-4.5 4.38 1.06 6.12L10 15.34l-5.57 2.83L5.5 12.05 1 7.67l7.01-1.6L10 1z" fill="#FFD700" />
        <path d="M30 1l2.99 6.07L40 7.67l-4.5 4.38 1.06 6.12L30 15.34l-5.57 2.83L25.5 12.05 21 7.67l7.01-1.6L30 1z" fill="#FFD700" />
        <path d="M50 1l2.99 6.07L60 7.67l-4.5 4.38 1.06 6.12L50 15.34l-5.57 2.83L45.5 12.05 41 7.67l7.01-1.6L50 1z" fill="#FFD700" />
        <path d="M70 1l2.99 6.07L80 7.67l-4.5 4.38 1.06 6.12L70 15.34l-5.57 2.83L65.5 12.05 61 7.67l7.01-1.6L70 1z" fill="#FFD700" />
        <path d="M90 1l2.99 6.07L100 7.67l-4.5 4.38 1.06 6.12L90 15.34l-5.57 2.83L85.5 12.05 81 7.67l7.01-1.6L90 1z" fill="url(#half)" />
      </g>
    </svg >),
    description: "Nestled in the heart of the city, Hotel Tranquility offers a serene retreat from the bustling urban life.",
    name: "Hotel Sunshine"
  }
  return (
    <div className="wrapper">
      <NavBar />
      <div className="intro">
        <div className="taglines">
          <span>Your Gateway</span><br />
          <p className="tag2">to the Perfect Stay</p>
          <button className="landing-button">Book now</button>
        </div>
        <div className="animation">
          <img src={hotel} alt="" />
        </div>
      </div>
      <div className="top-list">
        <span>Our recomended</span>
      </div>
      {dummyData.map((hotel, index) => (
        <HotelCard
          key={index}
          image={hotel.image}
          name={hotel.name}
          rating={hotel.rating}
          description={hotel.description}
        />
      ))}
      <div className="bottom-list">
        <span>Popular choice</span>
      </div>
      <div>
        <Hotellist
          image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price="450"
          rateing={HotelList.rateing}
          description={HotelList.description}
          name={HotelList.name}
        />
        <Hotellist
          image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price="450"
          rateing={HotelList.rateing}
          description={HotelList.description}
          name={HotelList.name}
        />
        <Hotellist
          image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price="450"
          rateing={HotelList.rateing}
          description={HotelList.description}
          name={HotelList.name}
        />
        <Hotellist
          image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price="450"
          rateing={HotelList.rateing}
          description={HotelList.description}
          name={HotelList.name}
        />
        <Hotellist
          image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price="450"
          rateing={HotelList.rateing}
          description={HotelList.description}
          name={HotelList.name}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Landing;