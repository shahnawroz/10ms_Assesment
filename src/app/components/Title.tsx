"use client";

import { FaStar } from "react-icons/fa";

export default function TitleSection() {
  return (
    <div className="bg-[#0B0B25] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          IELTS Course by Munzereen Shahid
        </h1>

        <div className="flex items-center space-x-2 text-sm">
          {/* Stars */}
          <div className="flex text-yellow-400 space-x-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>

          {/* Rating Text */}
          <span className="text-gray-200 text-[15px]">
            (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </span>
        </div>

        <p className="text-gray-300 text-[15px] leading-relaxed">
          Get complete preparation of Academic IELTS and General Training IELTS
          in one course! Join our IELTS Course today to achieve your desired
          band score under the guidance of the best IELTS Instructor in the
          country.
        </p>
      </div>
    </div>
  );
}
