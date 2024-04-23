import React from "react";
import './style.css';
import Aj1 from '../../assets/aj1-on-feet.jpg';
import Ye from '../../assets/yeezy-on-feet.jpg';
import Dunk from '../../assets/dunk-on-feet.jpeg';
import { Link } from "react-router-dom";

export function ExcluisveSquare() {
  return (
    <div className="cards-list">
      <div className="card 1">
        <div className="card_image">

          <img src={Aj1} alt="Air Jordan 1" />

        </div>
        <div className="card_title title-white">
          <Link to="/aj1">
            <p>Air Jordan 1</p>
          </Link>
        </div>
      </div>

      <div className="card 2">
        <div className="card_image">
          <img src={Ye} alt="Yeezy" />
        </div>
        <div className="card_title title-white">
          <Link to="/yeezy">
            <p>Yeezy</p>
          </Link>
        </div>
      </div>

      <div className="card 3">
        <div className="card_image">
          <img src={Dunk} alt="Dunk Low" />
        </div>
        <div className="card_title">
          <Link to="/dunk">
            <p>Dunk Low</p>
          </Link>
        </div>
      </div>


    </div>

  );
}


