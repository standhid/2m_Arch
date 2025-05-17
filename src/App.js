import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CollectionPreview from "./components/CollectionPreview";
import Footer from "./components/Footer";
import LogoBar from "./components/LogoBar";
import BrandPage from "./components/BrandPage"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <LogoBar />
        <Header />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CollectionPreview />
              </>
            }
          />

          {/* Brand-specific page */}
          <Route path="/brand/:brandName" element={<BrandPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
