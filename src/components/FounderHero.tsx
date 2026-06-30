import React from "react";
import "../styles/FounderHero.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FounderHero: React.FC = () => {
  return (
    <section className="founder-hero">
      <div className="founder-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="founder-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            For Founders Who Change <br /> The World.
          </h1>

          <p>
            Beyond capital, we provide the network, strategic advisory, and
            institutional credibility required to scale across borders. Join the
            AfriStar ecosystem today.
          </p>

          <div className="founder-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="primary-btn"
            >
              Apply for Funding
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="secondary-btn"
            >
              Our Process <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
        <div className="founder-right">
          <motion.img
            src="/Map.png"
            alt="AfriStar Logo"
            initial={{ opacity: 0, x: 80, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="founder-image"
          />
        </div>
        {/* FLOATING CARD */}
        <motion.div
          className="floating-card"
          initial={{ opacity: 0, x: 80, y: 40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <span className="tag">Network Update</span>
          <h3>New LP Joined</h3>

          <p>
            A global pension fund just committed $50M to our Seed-stage tech
            initiative.
          </p>

          <div className="card-footer">
            <div className="avatar" />
            <span>Global Vision Fund</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderHero;
