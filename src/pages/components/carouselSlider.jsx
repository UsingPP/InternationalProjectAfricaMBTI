import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carouselSliderCss.css";
import { useNavigate } from "react-router-dom";

function MultipleItems() {
  const navigate = new useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div class = "slider_list" onClick = {() => {navigate('/home/survey_LeaderShip');
            }}>
          <h1>image</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>2</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>3</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>4</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>5</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>6</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>7</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>8</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
        <div class = "slider_list">
          <h1>9</h1>
          <p class = "text">Hello, Everyone. What are you doing now? I'm fine thank you and you? I really hate pineapple pizza.</p>
        </div>
      </Slider>
    </div>
  );

}

export default MultipleItems;