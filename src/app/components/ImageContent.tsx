// components/IELTSFeatureCard.tsx
'use client';

import { useState, useEffect } from 'react';
import ImageFeatureCard from "./ImageFeatureCard";
import { fetchIELTSCourse } from '../lib/api'; // Adjust the import path as necessary

// Define types for the API response
type FeatureItem = {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
};

type Section = {
  type: string;
  name: string;
  values: FeatureItem[];
};

type ApiResponse = {
  sections: Section[];
};

export default function IELTSFeatureCard() {
  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [sectionName, setSectionName] = useState('Course Features');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIELTSCourse() as ApiResponse;
        const featureSection = data.sections.find(
          (section) => section.type === 'feature_explanations'
        );

        if (featureSection) {
          setSectionName(featureSection.name || 'Course Features');
          setFeatures(featureSection.values || []);
        }
      } catch (error) {
        console.error('Error fetching features:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading features...</div>;
  }

  if (!features.length) {
    return <div className="text-center py-8">No features available</div>;
  }

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-left mb-4">{sectionName}</h2>
    <div className="border border-[#d4dce5] rounded-xl p-6 bg-white shadow-sm max-w-5xl mx-auto space-y-6">
     
      
      {features.map((feature, index) => (
        <div key={feature.id}>
          <ImageFeatureCard
            title={feature.title}
            features={feature.checklist}
            imageSrc={feature.file_url}
          />
          {index < features.length - 1 && (
            <hr className="border-t border-[#d4dce5] my-6" />
          )}
        </div>
      ))}
    </div>
    </div>
  );
}