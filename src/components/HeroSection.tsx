import React from "react";
import "../styles/HeroSection.css";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";

const stats = [
  { value: "1200+", label: "Businesses Listed" },
  { value: "26", label: "African Countries" },
  { value: "3000+", label: "Global Investors" },
  { value: "$65M+", label: "Funding Requested" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-division">
          <div className="hero-left">
            {/* Top Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BadgeCheck size={18} /> Verified marketplace
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Africa’s Next Unicorn <br /> Could Be Here.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Connecting verified African entrepreneurs with investors worldwide
              through trusted, AI-powered discovery and investment matching.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button className="btn primary">
                Browse Opportunities <ArrowRight size={18} />
              </button>

              <button className="btn secondary">
                Submit Your Pitch <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          <div className="about-image">
            <motion.div
              className="image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/afristar-logo.png"
                alt="logo"
              />
              <div className="border-outline" />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
