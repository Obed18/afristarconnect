import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FounderHero from "../components/FounderHero";
import FocusAreas from "../components/FocusAreas";
import GlobalMap from "../components/GlobalMap";
// import TrustedPartners from "../components/TrustedPartners";
import Contact from "../components/Contact";
import RaiseCapital from "../components/RaiseCapital";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    window.requestAnimationFrame(() => {
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <section id="how-it-works" style={{ scrollMarginTop: "110px" }}>
        <HowItWorks />
      </section>
      <section id="opportunities" style={{ scrollMarginTop: "110px" }}>
        <FocusAreas />
      </section>
      {/* <VideoShowcase />
      <TrustedPartners />*/}
      <FounderHero />
      <section id="industries" style={{ scrollMarginTop: "110px" }}>
        <GlobalMap />
      </section>
      <RaiseCapital />
      <section id="contact" style={{ scrollMarginTop: "110px" }}>
        <Contact /> 
      </section>
      <Footer />
    </div>
  );
};

export default Home;
