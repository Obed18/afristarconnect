import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FounderHero from "../components/FounderHero";
import FocusAreas from "../components/FocusAreas";
import GlobalMap from "../components/GlobalMap";
// import TrustedPartners from "../components/TrustedPartners";
// import Contact from "../components/Contact";
import RaiseCapital from "../components/RaiseCapital";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FocusAreas />
      {/* <VideoShowcase />
      <TrustedPartners />*/}
      <FounderHero />
      <GlobalMap />
      <RaiseCapital />
      {/* <Contact />  */}
      <Footer />
    </div>
  );
};

export default Home;
