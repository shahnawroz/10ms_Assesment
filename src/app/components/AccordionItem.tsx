"use client";

import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  lastItem?: boolean;
}

export default function AccordionItem({
  title,
  children,
  lastItem = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`px-4 py-2 ${
        !lastItem ? "border-b border-dotted border-gray-300" : ""
      }`} // py-3 to py-2 (less height)
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-2 text-left hover:bg-gray-50 transition" // py-4 to py-2
      >
        <span className="font-medium text-gray-800 text-sm">{title}</span>{" "}
        {/* optional smaller font */}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}{" "}
        {/* smaller icons */}
      </button>
      {isOpen && <div className="pb-2 text-xs text-gray-700">{children}</div>}{" "}
      {/* smaller padding, smaller text */}
    </div>
  );
}
