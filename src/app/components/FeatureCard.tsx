// components/FeatureCard.tsx
import React from "react";
import type { FeatureCard as FeatureCardType } from "./type";

const FeatureCard: React.FC<FeatureCardType> = ({ 
  icon, 
  title, 
  description,
  className = '' 
}) => {
  return (
    <div className={`flex items-start text-black w-full ${icon || title ? 'space-x-3' : ''} ${className}`}>
      {icon && <div className="text-xl shrink-0 mt-1">{icon}</div>}
      <div className="space-y-1 flex-1">
        {title && (
          <h4 className="text-sm font-medium leading-snug">{title}</h4>
        )}
        {description && (
          <p className={`text-sm text-[#8D929F] leading-tight ${!title ? 'mt-0' : ''}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;