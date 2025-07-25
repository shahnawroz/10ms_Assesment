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
            (৮২.৬% শিক্ষার্থী কোর্স শেষ & ৫ রেটিং দিয়েছেন)
          </span>
        </div>

        <p className="text-gray-300 text-[15px] leading-relaxed">
          Academic IELTS এবং General Training IELTS - এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশের
          IELTS Instructor এর গাইডলাইনে আপনার কাঙ্খিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের
          IELTS Course-এ।
        </p>
      </div>
    </div>
  );
}
