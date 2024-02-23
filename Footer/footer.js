import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 alt="logo" className="logo">
                InStore
              </h1>
            </div>
            <div className="col-md-8">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className={"nav-link"} href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p className="text-center">Footer content goes here</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
