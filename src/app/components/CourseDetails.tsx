"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  title: string;
  content: string; // HTML string
}

const faqData: FAQItem[] = [
  {
    title: "Video: IELTS Introduction",
    content: `This video gives you a basic overview of the IELTS exam.
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>What is IELTS?</li>
                <li>Exam structure</li>
                <li>Scoring system</li>
              </ul>`,
  },
  {
    title: "Video: IELTS Overview",
    content: `Understand the different modules and scoring system.
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>Listening</li>
                <li>Reading</li>
                <li>Writing</li>
                <li>Speaking</li>
              </ul>`,
  },
  {
    title: "Video: How to Prepare for IELTS?",
    content: `Learn effective strategies to prepare for IELTS.
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>Daily practice</li>
                <li>Mock tests</li>
                <li>Time management</li>
              </ul>`,
  },
  {
    title: "Video: Making a Daily Routine",
    content: `Organize your study plan with a daily schedule.
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>Set achievable goals</li>
                <li>Include breaks</li>
                <li>Track your progress</li>
              </ul>`,
  },
];

export default function CourseDetails() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div className="relative mx-auto ">
      {/* Accordion Container */}
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

      {/* Floating Button Below Accordion */}
      {faqData.length > 5 && (
        <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md border text-xs text-gray-800 hover:bg-gray-50 transition-all"
          >
            <span className="whitespace-nowrap">
              {showAll ? "কম কন্টেন্ট" : "সবগুলো কন্টেন্ট"}
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
