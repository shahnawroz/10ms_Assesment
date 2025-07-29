import React, { JSX } from "react";

export type FeatureCard = {
  icon?: JSX.Element;
  title?: React.ReactNode;  // allows JSX for styling
  description: React.ReactNode;
};