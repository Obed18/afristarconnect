import React from "react";
import {
  Sprout,
  HeartPulse,
  Landmark,
  Brain,
  GraduationCap,
  Building2,
  Truck,
  ShoppingBag,
  Zap,
  Palette,
  Plane,
  Factory,
  Send,
  SearchCheck,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  sprout: Sprout,
  "heart-pulse": HeartPulse,
  landmark: Landmark,
  brain: Brain,
  "graduation-cap": GraduationCap,
  "building-2": Building2,
  truck: Truck,
  "shopping-bag": ShoppingBag,
  zap: Zap,
  palette: Palette,
  plane: Plane,
  factory: Factory,
  send: Send,
  "search-check": SearchCheck,
  "shield-check": ShieldCheck,
  rocket: Rocket,
  handshake: Handshake,
};

const SectorIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const Icon = map[name] || Sprout;
  return <Icon className={className} />;
};

export default SectorIcon;
