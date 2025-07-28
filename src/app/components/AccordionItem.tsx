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
      className={`px-4 py-3 ${
        !lastItem ? "border-b border-dotted border-gray-300" : ""
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 transition"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="pb-4 text-sm text-gray-700">{children}</div>}
    </div>
  );
}
