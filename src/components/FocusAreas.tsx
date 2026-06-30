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
        "https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493261241_c07a3031.png",
      color: "green-emerald",
    },
    {
      icon: Brain,
      title: "Baobab Bank",
      description:
        "Connecting 240 rural clinics to specialists via low-bandwidth video.",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493266898_c334f80b.png",
      color: "blue-teal",
    },
    {
      icon: GraduationCap,
      title: "Nairobi Accelerator",
      description:
        "Training programs, workshops, bootcamps, and mentorship for youth and professionals in coding, AI, and emerging technologies, with educational platforms and tools.",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493249932_5787b7b1.jpg",
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
