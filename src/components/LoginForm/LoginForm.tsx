import { motion } from "framer-motion";
import { Mail, Lock, Eye, Globe2 } from "lucide-react";

import "../../styles/LoginForm.css";

interface Props {
  onSwitch: () => void;
}

export default function LoginForm({ onSwitch }: Props) {
  return (
    <motion.div
      className="login-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.55 }}
    >
          <div className="auth-logo">
            <img src="/afristar-text.png" className="logo-img" alt="Logo" />
          </div>

      <h1>Register your investment thesis.</h1>

      <p>Sign in once and we'll route you to the right dashboard.</p>

      <div className="input">
        <label>
          <Mail size={18} />
          Email Address
        </label>

        <input placeholder="you@example.com" />
      </div>

      <div className="input">
        <label>
          <Lock size={18} />
          Password
        </label>

        <div className="password">
          <input type="password" placeholder="••••••••" />

          <Eye size={18} />
        </div>
      </div>

      <div className="forgot">Forgot password?</div>

      <button className="Sign-in">Sign In</button>

      <div className="bottom">
        Don't have an account?
        <span onClick={onSwitch}>Sign up</span>
      </div>
    </motion.div>
  );
}
