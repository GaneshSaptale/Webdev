import React from "react";
import phoneImage from "../navbar/assetimg/simg.png";
import HealthImage from "../navbar/assetimg/Healthimg.png";
import PocketthImage from "../navbar/assetimg/Pocketimg.png";
import MotorImage from "../navbar/assetimg/Motorimg.png";


function Home() {
  return (
    
    <div className="container mt-5">
      
      <div className="row">
        <div className="col-md-6">
          
          <h6 className="text-secondary">New Launch</h6>
          <h2>Insurance: Health Motor Wallet</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          
          <button className="btn btn-primary mt-5">Check Offers</button>
        </div>
        <div className="col-md-6">
          <img
            src={phoneImage}
            alt="Product"
            className="img-fluid product-image"
          />
        </div>
      </div>
      <hr/>
      
      <br />
      <br />{" "}
      <div className="row">
        <div className="col-md-6">
          <h2>Insurance: Health Insurance</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn btn-primary mt-5">Get Quote</button>
        </div>

        <div className="col-md-6">
          <img
            src={HealthImage}
            alt="Product"
            className="img-fluid product-image"
          />
        </div>
      </div>
      <hr/>
      <br />
      <br />
      
      <div className="row">
        <div className="col-md-6">
          <h2>Insurance: Motor Insurance</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn btn-primary mt-5">Get Quote</button>
        </div>

        <div className="col-md-6">
          <img
            src={MotorImage}
            alt="Product"
            className="img-fluid product-image"
          />
        </div>
      </div>
      <hr/>
      <br />
      <br />
     
      <div className="row">
        <div className="col-md-6">
          <h2>Insurance: Pocket Insurance</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn btn-primary mt-5">Get Quote</button>
        </div>

        <div className="col-md-6">
          <img
            src={PocketthImage}
            alt="Product"
            className="img-fluid product-image"
          />
        </div>
      </div>
      
     
    </div>
    
    
  );
}

export default Home;
