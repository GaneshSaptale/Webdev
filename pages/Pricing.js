import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body" style={{ backgroundColor: '#08AEEA', backgroundImage: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)' }}>
                <h4 className="card-title">Health Active</h4>
                <h1 className="card-text">₹5196.00</h1>
                <p>Health Insurance Plan: Gold</p>
                <p>Premium Price: ₹433/month </p>
                <p>Claim Settlement Ratio : 99.41%</p>
                <Link to="/get-quote">
                  <div className="btn btn-primary">Get Quote</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body"style={{ backgroundColor: '#08AEEA', backgroundImage: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)' }}>
                <h4 className="card-title">Motor OD Plus CP</h4>
                <h1 className="card-text">₹2400.00</h1>
                <p>comprehensive Insurance Plan </p>
                <p>Premium Price: ₹200/month </p>
                <p>Claim Settlement Ratio : 99.41%</p>
                <Link to="/get-quote">
                  <div className="btn btn-primary">Get Quote</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body"style={{ backgroundColor: '#08AEEA', backgroundImage: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)' }}>
                <h4 className="card-title">Pocket and Wallet</h4>
                <h1 className="card-text">₹360.00</h1>
                <p>Wallet Care Insurance Plan </p>
                <p>Premium Price: ₹30/month </p>
                <p>Claim Settlement Ratio : 99.41%</p>
                <Link to="/get-quote">
                  <div className="btn btn-primary">Get Quote</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
