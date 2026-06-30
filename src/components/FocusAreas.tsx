import React from "react";
import { Brain, Sprout, GraduationCap, ArrowRight, Code } from "lucide-react";
import "../styles/FocusAreas.css";

const FocusAreas: React.FC = () => {
  const areas = [
    {
      title: "Sahara Ventures",
      description:
        "IoT-driven irrigation cutting water use 40% for 12,000 farmers.",
      image:
        "https://plus.unsplash.com/premium_photo-1681398556150-7fa0d1e72703?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "green-emerald",
    },
    {
      icon: Brain,
      title: "Baobab Bank",
      description:
        "Connecting 240 rural clinics to specialists via low-bandwidth video.",
      image:
        "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "blue-teal",
    },
    {
      title: "Nairobi Accelerator",
      description:
        "Bringing clean power to 80,000 off-grid homes.",
      image:
        "https://plus.unsplash.com/premium_photo-1663956003409-80ab380dad22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "yellow-orange",
    },
  ];

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="focus-section">
      <div className="focus-container">
        <div className="focus-header fade-in">
          <h2 className="focus-title">Featured Startups</h2>
          <p className="focus-subtitle">
            Hand-picked, verified ventures actively raising. Each profile is
            vetted for investment readiness.
          </p>
        </div>

        <div className="focus-grid">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="focus-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="focus-image-wrapper">
                <img
                  src={area.image}
                  alt={area.title}
                  className="focus-image"
                />
                <div className={`focus-overlay ${area.color}`}></div>
              </div>

              <div className="focus-content">
                <h3 className="focus-card-title">{area.title}</h3>
                <p className="focus-card-desc">{area.description}</p>

                <button
                  onClick={scrollToServices}
                  className="focus-btn"
                  aria-label={`Learn more about ${area.title}`}
                >
                  Learn More <ArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
