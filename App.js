import React from "react";

import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import Pocket from "./components/pages/Pocket/pocketgetquote";
import "./components/pages/Pocket/pocketgetquote.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import "./components/Footer/footer.css";
import GetQuote from "./components/pages/GetQuote/getquotepage";
import"./components/pages/GetQuote/getquote.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       

        <Routes>
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Home />} />
          <Route path="/get-quote" element={<GetQuote />} />
         
        </Routes>
        
      </div>
     
      <br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </Router>
  );
}

export default App;
