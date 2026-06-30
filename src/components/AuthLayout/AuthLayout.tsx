import { motion } from "framer-motion";
import "../../styles/AuthLayout.css";

export default function AuthLayout() {
  return (
    <motion.div
      className="auth-left"
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
      }}
    >
      <div className="overlay" />

      <div className="hero-content">
        <motion.h1
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AfriStar Connect facilitates introductions
        </motion.h1>

        <motion.p
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Become an AfriStar Connect investor and discover Africa's most
          promising startups.
        </motion.p>
      </div>
    </motion.div>
  );
}
