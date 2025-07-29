'use client';

import { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { fetchIELTSCourse } from '../lib/api';
import { Check, X } from 'lucide-react';

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
  const [showVideoModal, setShowVideoModal] = useState(false);

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

  const handleVideoClick = () => {
    setShowVideoModal(true);
  };

  const closeModal = () => {
    setShowVideoModal(false);
  };

  if (loading) {
    return <div className="text-center py-8">Loading requirements...</div>;
  }

  return (
    <div className="mx-auto">
      <h2 className="text-2xl font-bold text-left mb-4">{sectionName}</h2>

      <div className="flex flex-col space-y-4 border border-[#d4dce5] rounded-lg p-6 bg-white">
        <div className="w-full">
          <FeatureCard
            description={
              <span>
                কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{' '}
                <button 
                  onClick={handleVideoClick}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  এই ভিডিওটি দেখুন
                </button>
              </span>
            }
          />
        </div>
      </div>

      {/* YouTube Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl relative">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <div className="p-4 aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5wfn60rmWX4?autoplay=1"
                title="How to Pay for 10 Minute School Courses"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}