'use client';

import { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';
import { ChevronDown } from 'lucide-react';
import { fetchIELTSCourse } from '../lib/api'; // Adjust the import path as necessary

// Define types for the API response
type AboutItem = {
  description: string;
  icon: string;
  id: string;
  title: string;
};

type Section = {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: AboutItem[];
};

type ApiResponse = {
  sections: Section[];
};

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const [aboutData, setAboutData] = useState<AboutItem[]>([]);
  const [sectionName, setSectionName] = useState('Frequently Asked Questions');
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIELTSCourse() as ApiResponse;
        const aboutSection = data.sections.find(
          (section) => section.type === 'about'
        );

        if (aboutSection) {
          setSectionName(aboutSection.name || 'Course Details');
          setAboutData(aboutSection.values || []);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const visibleItems = showAll ? aboutData : aboutData.slice(0, 5);

  if (loading) {
    return <div className="text-center py-8">Loading course details...</div>;
  }

  if (!aboutData.length) {
    return <div className="text-center py-8">No course details available</div>;
  }

  return (
    <div className="relative mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {sectionName}
      </h2>

      {/* Accordion Container */}
      <div className="border border-[#d4dce5] rounded-md bg-white overflow-hidden">
        {visibleItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            title={stripHtmlTags(item.title)} // Clean title
            lastItem={index === visibleItems.length - 1}
          >
            <div 
              className="prose max-w-none p-4" 
              dangerouslySetInnerHTML={{ __html: item.description }} 
            />
          </AccordionItem>
        ))}
      </div>

      {/* Floating Button Below Accordion */}
      {aboutData.length > 5 && (
        <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md border text-xs text-gray-800 hover:bg-gray-50 transition-all"
          >
            <span className="whitespace-nowrap">
              {showAll ? "Show less" : "Show all"}
            </span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              size={14}
            />
          </button>
        </div>
      )}
    </div>
  );
}

// Helper function to strip HTML tags
function stripHtmlTags(html: string): string {
  return html.replace(/<\/?[^>]+(>|$)/g, '');
}