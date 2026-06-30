import React, { InputHTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, LucideIcon } from "lucide-react";
import "../styles/Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  type = "text",
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <motion.div
      className="input-group"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <label className="input-label">
        {Icon && <Icon size={18} />}
        {label}
      </label>

      <div className={`input-wrapper ${error ? "error" : ""}`}>
        <input
          {...props}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className="custom-input"
        />

        {isPassword && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && <span className="input-error">{error}</span>}
    </motion.div>
  );
};

export default Input;
