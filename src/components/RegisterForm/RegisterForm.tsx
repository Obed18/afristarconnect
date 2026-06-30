import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Globe2,
  Building2,
  BriefcaseBusiness,
  FolderKanban,
  MapPinned,
  DollarSign,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

import Input from "../../UI/Input";
import Select from "../../UI/Select";
import Checkbox from "../../UI/Checkbox";

import { countries } from "../../data/countries";
import { investorTypes } from "../../data/investorTypes";
import { sectors } from "../../data/sectors";
import { stages } from "../../data/stages";
import { investmentRanges } from "../../data/investmentRanges";

import "../../styles/RegisterForm.css";

interface Props {
  onSwitch: () => void;
}

const RegisterForm: React.FC<Props> = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    organisation: "",
    investorType: "",
    preferredSector: "",
    preferredCountry: "",
    investmentRange: "",
    businessStage: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formValid = useMemo(() => {
    return (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.country &&
      formData.organisation.trim() &&
      formData.investorType &&
      formData.preferredSector &&
      formData.preferredCountry &&
      formData.investmentRange &&
      formData.businessStage &&
      agreed
    );
  }, [formData, agreed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formValid) return;

    console.log(formData);
  };

  return (
    <motion.form
      className="register-card"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.45 }}
    >
      <div className="register-header">
        <div className="logo-circle">
          <Globe2 size={20} />
        </div>

        <div>
          <h2>Register your investment thesis.</h2>
          <p>
            Tell us who you are and what you're looking for. We'll match you
            with verified opportunities and complete a brief verification before
            granting access.
          </p>
        </div>
      </div>

      <div className="register-grid">
        <Input
          label="Full Name"
          icon={User}
          placeholder="John Doe"
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
        />

        <Input
          label="Email Address"
          icon={Mail}
          placeholder="john@email.com"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
        />

        <Input
          label="Phone Number"
          icon={Phone}
          placeholder="+233 xx xxx xxxx"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />

        <Select
          label="Country"
          icon={Globe2}
          value={formData.country}
          onChange={(value) => updateField("country", value)}
          options={countries}
        />

        <Input
          label="Organisation Name"
          icon={Building2}
          placeholder="ABC Ventures"
          value={formData.organisation}
          onChange={(e) => updateField("organisation", e.target.value)}
        />

        <Select
          label="Investor Type"
          icon={BriefcaseBusiness}
          value={formData.investorType}
          onChange={(value) => updateField("investorType", value)}
          options={investorTypes}
        />
        <Select
          label="Preferred Sector"
          icon={FolderKanban}
          value={formData.preferredSector}
          onChange={(value) => updateField("preferredSector", value)}
          options={sectors}
        />

        <Select
          label="Preferred Country"
          icon={MapPinned}
          value={formData.preferredCountry}
          onChange={(value) => updateField("preferredCountry", value)}
          options={countries}
        />

        <Select
          label="Investment Range"
          icon={DollarSign}
          value={formData.investmentRange}
          onChange={(value) => updateField("investmentRange", value)}
          options={investmentRanges}
        />

        <Select
          label="Preferred Business Stage"
          icon={TrendingUp}
          value={formData.businessStage}
          onChange={(value) => updateField("businessStage", value)}
          options={stages}
        />
      </div>

      <div className="message-section">
        <label className="message-label">
          <MessageSquare size={18} />
          Message / Interest Area
        </label>

        <textarea
          rows={6}
          placeholder="Tell us more about your investment interests, preferred markets, ticket size, portfolio strategy, or any additional information..."
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
      </div>

      <Checkbox checked={agreed} onChange={setAgreed}>
        I acknowledge that I must conduct my own due diligence before making any
        investment decision. AfriStar Connect does not provide investment, legal
        or tax advice and does not guarantee returns or investment outcomes.
      </Checkbox>

      <motion.button
        type="submit"
        className="register-btn"
        whileHover={formValid ? { scale: 1.02 } : {}}
        whileTap={formValid ? { scale: 0.98 } : {}}
        disabled={!formValid}
      >
        Register as Investor
      </motion.button>

      <div className="login-link">
        Already have an account?
        <span onClick={onSwitch}>Sign In</span>
      </div>
    </motion.form>
  );
};

export default RegisterForm;
