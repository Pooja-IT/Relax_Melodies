import React from "react";
import Button from "./Button";

export default function Slider() {
    return(
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
       
        <div className="carousel-item active">

          <img src="/images/yoga.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h2>Open Your Mind to Mindfulness</h2>
            <Button onClick={ () => {console.log("Click on Subscribe")}}>Subscribe</Button>
          </div>
         
        </div>
        <div className="carousel-item active">
          <img src="/images/2.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h2>Open Your Mind to Mindfulness</h2>
            <Button onClick={ () => {console.log("Click on Subscribe")}}>Subscribe</Button>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="/images/4.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h2>Open Your Mind to Mindfulness</h2>
            <Button onClick={ () => {console.log("Click on Subscribe")}}>Subscribe</Button>
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    )
}