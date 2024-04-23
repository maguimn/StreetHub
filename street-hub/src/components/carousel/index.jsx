import React, { useEffect } from 'react';
import './style.css';
import JordanImg from '../../assets/poster-jordan.jpg';
import BapeImg from '../../assets/poster-bape.jpg';

export function Caroussel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={JordanImg} className="d-block w-100" alt="Jordan Poster" />
        </div>
        <div className="carousel-item">
          <img src={BapeImg} className="d-block w-100" alt="Bape Poster" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
