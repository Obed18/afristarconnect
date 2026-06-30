import React from "react";
import { motion } from "framer-motion";
import "../styles/Checkbox.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, children }) => {
  return (
    <motion.label
      className="checkbox-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span className="custom-checkbox" />

      <span className="checkbox-text">{children}</span>
    </motion.label>
  );
};

export default Checkbox;
