import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import "../styles/Select.css";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  icon?: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  icon: Icon,
  value,
  onChange,
  options,
  error,
}) => {
  return (
    <motion.div
      className="select-group"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <label className="select-label">
        {Icon && <Icon size={18} />}
        {label}
      </label>

      <div className={`select-wrapper ${error ? "error" : ""}`}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="custom-select"
        >
          <option value="">Select...</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown size={18} className="select-arrow" />
      </div>

      {error && <span className="select-error">{error}</span>}
    </motion.div>
  );
};

export default Select;
