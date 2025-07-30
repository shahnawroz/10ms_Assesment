// components/FeatureList.tsx
"use client"
import { PlayCircle, FileText, Headphones, Radio } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { FeatureCard as FeatureCardType } from "./type";
import { fetchIELTSCourse } from "../lib/api";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Section {
  type: string;
  name?: string;
  values: Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>;
}

interface ApiResponse {
  sections: Section[];
}

const FeatureList = () => {
  const [featureData, setFeatureData] = useState<FeatureCardType[]>([]);
  const [sectionTitle, setSectionTitle] = useState<string>("How the course is laid out");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIELTSCourse('bn') as ApiResponse;
        const featuresSection = data.sections.find(
          (section) => section.type === "features"
        );
        
        if (featuresSection) {
          setSectionTitle(featuresSection.name || "How the course is laid out");
          
          const mappedData: FeatureCardType[] = featuresSection.values.map((item) => ({
            icon: (
              <div className="w-6 h-6 relative">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  fill
                  className="object-contain"
                />
              </div>
            ),
            title: <span className="text-white">{item.title}</span>,
            description: item.subtitle,
          }));
          setFeatureData(mappedData);
        }
      } catch (err) {
        setError("Failed to load features data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="bg-[#0A1629] p-6 rounded-xl text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="bg-[#0A1629] p-6 rounded-xl text-center text-red-500">{error}</div>;
  }

  const fallbackData: FeatureCardType[] = [
    {
      icon: <PlayCircle className="text-green-400" />,
      title: <span className="text-white">৫০+ ভিডিও লেকচার</span>,
      description: "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা।",
    },
    {
      icon: <FileText className="text-blue-400" />,
      title: <span className="text-white">৩টি লেকচার শীট</span>,
      description: "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্রাটেজি এবং 600+ Vocabulary",
    },
    {
      icon: <Headphones className="text-yellow-400" />,
      title: <span className="text-white">রিডিং এবং লিসনিং মক টেস্ট</span>,
      description: "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
    },
    {
      icon: <Radio className="text-red-400" />,
      title: <span className="text-white">ডাউট সলভিং লাইভ ক্লাস</span>,
      description: "সাপ্তাহিক লাইভ ক্লাসে এক্সপার্ট টিচারের কাছে প্রশ্নের সমাধান এর সুযোগ",
    },
  ];

  const displayData = featureData.length > 0 ? featureData : fallbackData;

  return (
    <div className="bg-[#0A1629] p-8 rounded-xl flex flex-col items-center w-full">
      <h2 className="text-white text-2xl font-bold mb-8 text-center">{sectionTitle}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {displayData.map((card, index) => (
          <div key={index} className="h-full">
            <FeatureCard 
              {...card} 
              className="h-full min-h-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;