import React, { useState } from "react";
import "../styles/GlobalMap.css";
import { MAP_NODES } from "../data/afristar";

interface MapNode {
  region: string;
  x: number;
  y: number;
  primary?: boolean;
  investors?: number;
  businesses?: number;
}

const GlobalMap: React.FC = () => {
  const [active, setActive] = useState<string>("Africa");

  const africa = MAP_NODES.find((n: MapNode) => n.primary)!;

  return (
    <section className="globalmap-section">
      <div className="globalmap-container">
        {/* Header */}
        <div className="globalmap-header">
          <span className="globalmap-tag">Global Network</span>
          <h2 className="globalmap-title">Capital Flowing Into Africa</h2>
          <p className="globalmap-subtitle">
            Watch investment connect African ventures with capital from Europe,
            the Americas, Asia and the Middle East.
          </p>
        </div>

        {/* Map Card */}
        <div className="globalmap-card">
          <div className="globalmap-bg-pattern" />

          <div className="globalmap-map">
            {/* SVG Lines */}
            <svg viewBox="0 0 100 56" className="globalmap-svg">
              {MAP_NODES.filter((n: MapNode) => !n.primary).map(
                (n: MapNode) => (
                  <line
                    key={n.region}
                    x1={africa.x}
                    y1={africa.y}
                    x2={n.x}
                    y2={n.y}
                    className={`globalmap-line ${
                      active === n.region ? "active" : ""
                    }`}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="6"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </line>
                )
              )}
            </svg>

            {/* Nodes */}
            {MAP_NODES.map((n: MapNode) => (
              <button
                key={n.region}
                onMouseEnter={() => setActive(n.region)}
                onClick={() => setActive(n.region)}
                className="globalmap-node"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                {n.primary && <span className="globalmap-pulse" />}

                <span
                  className={`globalmap-dot ${
                    n.primary ? "primary" : "secondary"
                  } ${active === n.region ? "active" : ""}`}
                />

                <span className="globalmap-label">{n.region}</span>
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="globalmap-stats">
            {(() => {
              const node = MAP_NODES.find((n: MapNode) => n.region === active)!;

              const data = node.primary
                ? [
                    ["Businesses", node.businesses],
                    ["Active Raises", 312],
                    ["Total Sought", "$48M"],
                  ]
                : [
                    ["Investors", node.investors],
                    ["Region", node.region],
                    ["Deals Backed", Math.round((node.investors || 0) / 3)],
                  ];

              return data.map(([label, val]) => (
                <div key={label as string} className="globalmap-stat">
                  <p className="globalmap-stat-value">
                    {typeof val === "number" ? val.toLocaleString() : val}
                  </p>
                  <p className="globalmap-stat-label">{label}</p>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
