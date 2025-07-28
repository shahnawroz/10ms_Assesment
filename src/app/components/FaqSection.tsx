'use client';

import { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';
import { ChevronDown } from 'lucide-react';
import { fetchIELTSCourse } from '../lib/api';

interface FAQItem {
  title: string;
  content: string;
}

type ApiFAQItem = {
  question: string;
  answer: string;
  id: string;
};

type Section = {
  type: string;
  name: string;
  values: ApiFAQItem[];
};

type ApiResponse = {
  sections: Section[];
};

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [sectionName, setSectionName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIELTSCourse() as ApiResponse;
        const faqSection = data.sections.find(section => section.type === 'faq');
        
        if (faqSection) {
          setSectionName(faqSection.name || 'Frequently Asked Questions');
          
          if (faqSection.values) {
            const formattedData = faqSection.values.map(item => ({
              title: item.question,
              content: item.answer.replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
            }));
            setFaqData(formattedData);
          }
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const visibleItems = showAll ? faqData : faqData.slice(0, 5);

  if (loading) {
    return (
      <div className="relative mx-auto">
        <div className="border border-[#d4dce5] rounded-md bg-white overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-4 border-b border-[#d4dce5] animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto">
      {/* Section Title - Added above but outside the card */}
      <h2 className="text-2xl font-bold text-left mb-4">{sectionName}</h2>
      
      {/* Original Accordion Container - Design unchanged */}
      <div className="border border-[#d4dce5] rounded-md bg-white overflow-hidden">
        {visibleItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            lastItem={index === visibleItems.length - 1}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>

      {/* Original Floating Button - Design completely unchanged */}
      {faqData.length > 5 && (
        <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md border text-xs text-gray-800 hover:bg-gray-50 transition-all"
          >
            <span className="whitespace-nowrap">{showAll ? 'কম কন্টেন্ট' : 'সবগুলো কন্টেন্ট'}</span>
            <ChevronDown
              className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              size={14}
            />
          </button>
        </div>
      )}
    </div>
  );
}