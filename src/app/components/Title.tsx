// app/ielts/page.tsx (server component by default)
import { fetchIELTSCourse } from "../lib/api";
import { FaStar } from "react-icons/fa";

export default async function IELTSPage() {
  const data = await fetchIELTSCourse("en");

  return (
    <div className="bg-[#0B0B25] text-white px-6 py-10 max-w-5xl mx-auto space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>

      <div className="flex items-center space-x-2 text-sm">
        <div className="flex text-yellow-400 space-x-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>

        <span className="text-gray-200 text-[15px]">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
      </div>

      <div
        className="text-gray-300 text-[15px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
}
