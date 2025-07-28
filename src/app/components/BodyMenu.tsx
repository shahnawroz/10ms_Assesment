"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuItems = [
  "কোর্স ইন্ট্রোস্ট্রাক্টর",
  "কোর্সটি যেভাবে সাজানো হয়েছে",
  "কোর্সটি করে যা শিখবেন",
  "কোর্স সম্পর্কে বিস্তারিত",
  "আরো কিছু জানুন",
  "পরীক্ষার প্রস্তুতি",
  "সার্টিফিকেট তথ্য",
  "ফিডব্যাক দিন",
];

export default function BodyMenu() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemWidth = 150;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const arrowBaseColor = "#818180";

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`p-2 rounded-full absolute left-0 z-10 top-1/2 -translate-y-1/2
            ${canScrollLeft ? "cursor-pointer" : "cursor-not-allowed opacity-40"}`}
          style={{ backgroundColor: arrowBaseColor }}
          aria-label="Scroll Left"
        >
          <ChevronLeft
            size={18}
            className={canScrollLeft ? "text-white" : "text-gray-300"}
          />
        </button>

        {/* Scrollable Menu */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap flex items-center px-10 py-3 scroll-smooth no-scrollbar"
        >
          {menuItems.map((item, index) => (
            <span
              key={index}
              title={item}
              className="text-[15px] font-medium cursor-pointer text-gray-700 hover:text-black px-4 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`p-2 rounded-full absolute right-0 z-10 top-1/2 -translate-y-1/2
            ${canScrollRight ? "cursor-pointer" : "cursor-not-allowed opacity-40"}`}
          style={{ backgroundColor: arrowBaseColor }}
          aria-label="Scroll Right"
        >
          <ChevronRight
            size={18}
            className={canScrollRight ? "text-white" : "text-gray-300"}
          />
        </button>
      </div>
    </div>
  );
}
