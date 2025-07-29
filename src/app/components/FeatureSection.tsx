// components/FeatureSection.tsx
"use client";

import FeatureCard from "./FeatureCard";
import { features } from "../components/features";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 bg-white p-6 rounded-md  mx-auto border border-[#d4dce5]">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
