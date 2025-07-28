// components/FeatureList.tsx
import { PlayCircle, FileText, Headphones, Radio } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { FeatureCard as FeatureCardType } from "./type";

const featureData: FeatureCardType[] = [
  {
    icon: <PlayCircle className="text-green-400" />,
    title: <span className="text-white">৫০+ ভিডিও লেকচার</span>,
    description:
      "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা।",
  },
  {
    icon: <FileText className="text-blue-400" />,
    title: <span className="text-white">৩টি লেকচার শীট</span>,
    description:
      "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্রাটেজি এবং 600+ Vocabulary",
  },
  {
    icon: <Headphones className="text-yellow-400" />,
    title: <span className="text-white">রিডিং এবং লিসনিং মক টেস্ট</span>,
    description: "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
  },
  {
    icon: <Radio className="text-red-400" />,
    title: <span className="text-white">ডাউট সলভিং লাইভ ক্লাস</span>,
    description:
      "সাপ্তাহিক লাইভ ক্লাসে এক্সপার্ট টিচারের কাছে প্রশ্নের সমাধান এর সুযোগ",
  },
];

const FeatureList = () => {
  return (
    <div className="bg-[#0A1629] p-6 rounded-xl flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl ">
        {featureData.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
