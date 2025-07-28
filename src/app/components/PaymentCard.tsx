// components/CourseRequirements.tsx
'use client';

import { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { fetchIELTSCourse } from '../lib/api';
import { Check } from 'lucide-react';

type Section = {
  type: string;
  name: string;
};

type ApiResponse = {
  sections: Section[];
};

export default function PaymentCard() {
  const [sectionName, setSectionName] = useState('Payment Information');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIELTSCourse() as ApiResponse;
        const requirementsSection = data.sections.find(
          (section) => section.type === 'how_to_pay'
        );

        if (requirementsSection?.name) {
          setSectionName(requirementsSection.name);
        }
      } catch (error) {
        console.error('Error fetching requirements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading requirements...</div>;
  }

  return (
    <div className="mx-auto ">
      <h2 className="text-2xl font-bold text-left mb-4">{sectionName}</h2>

      <div className="flex flex-col space-y-4 border border-[#d4dce5] rounded-lg p-6 bg-white">
        {/* First Feature Card - Full width */}
       
        
        {/* Second Feature Card - Full width */}
        <div className="w-full">
          <FeatureCard
            
         
            description="কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে এই ভিডিওটি দেখুন"
          />
        </div>
      </div>
    </div>
  );
}