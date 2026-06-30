import React from "react";
import "../styles/RaiseCapital.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RaiseCapital: React.FC = () => {
  return (
    <section className="raise-wrapper">
      <motion.div
        className="raise-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Tag */}
        <motion.p
          className="raise-tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          RAISE OR INVEST
        </motion.p>

        {/* Title */}
        <motion.h1
          className="raise-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Ready to Raise Capital?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="raise-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Join the verified marketplace where Africa’s investment-ready
          entrepreneurs meet global investors looking for real opportunities.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="raise-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn primary">
            Submit Your Pitch <ArrowRight size={18} />
          </button>

          <button className="btn secondary">
            Become an Investor <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Footer text */}
        <motion.p
          className="raise-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Admin approval required &nbsp; • &nbsp; Secure diligence workflows
          &nbsp; • &nbsp; Global investor discovery
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RaiseCapital;
