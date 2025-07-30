// components/GroupJoinEngagement.tsx
"use client"
import Image from "next/image";
import { fetchIELTSCourse } from "../lib/api";
import { useEffect, useState } from "react";

// Define types for the API response
interface EngagementItem {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface ApiSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: EngagementItem[];
}

interface ApiResponse {
  sections: ApiSection[];
}

const GroupJoinEngagement = () => {
  const [engagementData, setEngagementData] = useState<EngagementItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIELTSCourse('bn') as ApiResponse;
        const engagementSection = data.sections.find(
          (section) => section.type === "group_join_engagement"
        );
        
        if (engagementSection?.values?.[0]) {
          setEngagementData(engagementSection.values[0]);
        }
      } catch (err) {
        setError("Failed to load engagement data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6 rounded-xl text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 rounded-xl text-center text-red-500">{error}</div>;
  }

  if (!engagementData) {
    return null; // or return some fallback UI
  }

  return (
    <div 
      className="p-6 rounded-xl bg-cover bg-center "
      style={{ backgroundImage: `url(${engagementData.background.image})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {/* Left side - Image with text below */}
        <div className="flex flex-col gap-4">
          <div className="rounded-lg overflow-hidden w-full">
            <Image
              src={engagementData.top_left_icon_img}
              alt="Free PDF"
              width={400}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-white">
            <h4 
              className="text-lg font-semibold"
              style={{ color: engagementData.title_color }}
            >
              {engagementData.title}
            </h4>
            <p 
              className="text-sm mt-1"
              style={{ color: engagementData.description_color }}
            >
              {engagementData.description}
            </p>
          </div>
          <a 
            href={engagementData.cta.clicked_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-center transition-colors"
          >
            {engagementData.cta.text}
          </a>
        </div>

        {/* Right side - Image only */}
        <div className="rounded-lg overflow-hidden w-full h-auto">
          <Image
            src={engagementData.thumbnail}
            alt="IELTS Preparation"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupJoinEngagement;