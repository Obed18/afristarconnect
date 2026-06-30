import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const sidebarVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "tween" as const, duration: 0.4 } },
  exit: { x: "100%", transition: { type: "tween" as const, duration: 0.3 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // "ventures" | "about" | null

  const venturesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as Node;
      if (
        openDropdown === "ventures" &&
        venturesRef.current &&
        !venturesRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
      if (
        openDropdown === "about" &&
        aboutRef.current &&
        !aboutRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { path: "/", label: "Opportunities" },
    { path: "/about", label: "How it works" },
    { path: "/services", label: "Industries", isParent: true },
    // { path: "/portfolio", label: "Portfolio" },
    // { path: "/partner", label: "Partner" },
    // { path: "/blog", label: "Blog", isParent: true },
    { path: "/contact", label: "Contact" },
  ];

  // Helper function to check if a link is active (handles nested routes)
  const isLinkActive = (itemPath: string, isParent?: boolean): boolean => {
    if (isParent) {
      // For parent routes, match if pathname starts with the path
      return location.pathname.startsWith(itemPath);
    }
    // For other routes, do exact match
    return location.pathname === itemPath;
  };

  const navLinks = (
    <ul className="courier-links">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive || isLinkActive(item.path, item.isParent)
                ? "link-text active-link"
                : "link-text"
            }
          >
            {item.label}

            {/* Sleek Animated Indicator */}
            {isLinkActive(item.path, item.isParent) && (
              <motion.span
                layoutId="activeIndicator"
                className="active-indicator"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <div className="left-logo">
          <div className="create-logo">
            <img src="/afristar-text.png" className="logo-img" alt="Logo" />
          </div>
        </div>
        <div className="nav-links">{navLinks}</div>
        <div className="nav-buttons">
          <Link to="/register">
            <button className="button-outline">Sign in</button>
          </Link>
          <Link to="/register">
            <button className="button-filled">Get Started</button>
          </Link>
        </div>

        {menuOpen ? (
          <X className="mobile-menu-icon" onClick={toggleMenu} />
        ) : (
          <Menu className="mobile-menu-icon" onClick={toggleMenu} />
        )}
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="mobile-sidebar open"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              ref={sidebarRef}
            >
              <X className="sidebar-close-icon" onClick={toggleMenu} />
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/partner">Partner</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact" onClick={toggleMenu}>
                    Contact
                  </a>
                </li>
              </ul>
              <motion.div
                className="footer-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="mobile-nav-buttons">
                  <Link to="/register">
                    <button className="button-outline">Sign In</button>
                  </Link>
                  <Link to="/register">
                    <button className="button-filled">Get Started</button>
                  </Link>
                </div>
                <p>© 2026 AfriStar Connect. All rights reserved.</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
