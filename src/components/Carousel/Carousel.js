import React from "react";
import './Carousel.css';

export const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/drinks/assets/images/carousel/shop.jpg" className="d-block w-100" alt="shop" />
          <div className="carousel-caption d-none d-md-block">
            <h5>The best Drink Online Store in the world!!</h5>
            <p>We have a lot of drinks to offer, with a high quality and an incredible price!!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/drinks/assets/images/carousel/wine.jpg" className="d-block w-100" alt="wine" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Wines of high quality</h5>
            <p>We have a lot of wines from all around the world with the finest taste!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/drinks/assets/images/carousel/beers.jpg" className="d-block w-100" alt="beers" />
          <div className="carousel-caption d-none d-md-block">
            <h5>The best beers</h5>
            <p>The best beers with a lot of variety from different countries</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
