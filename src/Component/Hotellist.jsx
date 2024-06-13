import React from "react";
import "../assets/CSS/Hotellist.css";

function Hotellist(props) {
    return (
        <div className="Hotel-list">
            <div className="left-side">
                <div className="left-left">
                    <div className="hotel-img">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="rateing">
                        {props.rateing}
                    </div>
                </div>
                <div className="left-right">
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="right-con">
                    <div className="price">
                        <span>$ {props.price}</span>
                    </div>
                    <div className="book-btn">
                        <button>Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotellist;