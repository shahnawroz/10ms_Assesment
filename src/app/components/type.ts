import React from "react";

export interface FeatureCard {
  icon?: React.ReactNode;
  title?: React.ReactNode; // Changed from string to ReactNode
  description?: React.ReactNode;
  className?: string;
}