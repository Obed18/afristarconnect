// App.tsx
import React from "react";
import "./styles/global.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
// import Blog from "./pages/Blog";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import About from "./pages/About";
// import Article from "./pages/Article";
// import Partner from "./pages/Partner";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AuthPage />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/partner" element={<Partner />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
