// components/FeatureCard.tsx
import React from "react";
import type { FeatureCard } from "./type";

const FeatureCard: React.FC<FeatureCard> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg shadow-md bg-[#0C1A30] text-white w-full max-w-[310px]">
      <div className="text-xl shrink-0">{icon}</div>
      <div className="space-y-1">
        <h4 className="text-base font-semibold leading-snug">{title}</h4>
        <p className="text-sm text-gray-300 leading-tight break-words">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
