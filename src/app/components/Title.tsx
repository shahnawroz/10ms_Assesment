// app/ielts/page.tsx
import { fetchIELTSCourse } from "../lib/api";
import { FaStar } from "react-icons/fa";

export default async function IELTSPage() {
  const data = await fetchIELTSCourse("en");

  return (
    <div className="bg-[#0B0B25] text-white px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto space-y-5">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        {data.title}
      </h1>

      {/* Rating Section */}
      <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
        <div className="flex text-yellow-400 space-x-[2px]">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>

        <span className="text-gray-300 text-[14px] sm:text-[15px]">
          (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
        </span>
      </div>

      {/* Description */}
      <div
        className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed space-y-2"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
}
