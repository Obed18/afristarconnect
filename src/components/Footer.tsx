import React from "react";
import "../styles/Footer.css";
import { Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

type IconProps = {
  size?: number;
  className?: string;
};

const FacebookIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaFacebookF as any, props);
const InstagramIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaInstagram as any, props);
const TwitterIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaXTwitter as any, props);
const LinkedinIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaLinkedinIn as any, props);
const WhatsappIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaWhatsapp as any, props);

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <motion.div
          className="footer-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="left-logo">
            <div className="create-logo">
              <img src="/afristar-text.png" className="logo-img" alt="Logo" />
            </div>
          </div>
          <p className="description">
            Institutional-grade investment platform bridging global capital and
            African innovation.
          </p>

          <div className="icons">
            <div className="icon">
              <LinkedinIcon size={18} />
            </div>
            <div className="icon">
              <Mail size={18} />
            </div>
            <div className="icon">
              <TwitterIcon size={18} />
            </div>
            <div className="icon">
              <InstagramIcon size={18} />
            </div>
            <div className="icon">
              <FacebookIcon size={18} />
            </div>
          </div>
        </motion.div>

        {/* PLATFORM */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4>Platform</h4>
          <ul>
            <li>Browse Startups</li>
            <li>Investor Dashboard</li>
            <li>Success Stories</li>
            <li>How it Works</li>
          </ul>
        </motion.div>

        {/* COMPANY */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Investor Relations</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </motion.div>

        {/* SUBSCRIBE */}
        <motion.div
          className="footer-subscribe"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4>Stay Updated</h4>
          <p>Get the latest investment opportunities in your inbox.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2024 AfriStar Connect. All rights reserved.</p>

        <div className="footer-links">
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
