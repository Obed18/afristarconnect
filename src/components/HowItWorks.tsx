import React from "react";
import "../styles/HowItWorks.css";
import { motion, Variants } from "framer-motion";
import {
  Send,
  SearchCheck,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Submit",
    description:
      "Entrepreneurs create a profile and submit their pitch with our AI-guided builder.",
    icon: <Send size={28} />,
  },
  {
    id: 2,
    title: "Review",
    description:
      "Our analysts and AI engine score business clarity, market and investment readiness.",
    icon: <SearchCheck size={28} />,
  },
  {
    id: 3,
    title: "Verification",
    description:
      "Documents, financials and identity are verified to earn the trusted badge.",
    icon: <ShieldCheck size={28} />,
  },
  {
    id: 4,
    title: "Published",
    description:
      "Approved startups go live to a curated network of vetted global investors.",
    icon: <Rocket size={28} />,
  },
  {
    id: 5,
    title: "Connection",
    description:
      "Investors express interest, message founders and schedule meetings directly.",
    icon: <Handshake size={28} />,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowItWorks: React.FC = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="process-subtitle">THE AFRISTAR PROCESS</span>
          <h2>Why AfriStar?</h2>
          <p>
            A rigorous five-step journey that turns raw ambition into
            investment-ready, verified opportunities.
          </p>
        </motion.div>

        <div className="timeline-line" />

        <motion.div
          className="process-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="process-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon-wrapper">
                {step.icon}
                <span className="step-badge">{step.id}</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
