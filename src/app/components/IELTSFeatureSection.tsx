// components/IELTSFeatureSection.tsx
'use client';

import React from "react";
import FeatureCard from "./FeatureCard";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  { title: "360 পৃষ্ঠা" },
  { title: "প্রিমিয়াম হার্ডকপি" },
  { title: "ফ্রি ডেলিভারি" },
  { title: "৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি" },
];

const IELTSFeatureSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gradient-to-r from-black to-red-600 rounded-xl p-6 text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text + Features */}
        <div className="flex-1 space-y-5">
          <h2 className="text-xl font-bold">
            ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
          </h2>

          <div className="space-y-4 [&_*]:text-white">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={<CheckCircle className="text-white w-5 h-5" />}
                title={feature.title}
                description=""
              />
            ))}
          </div>
        </div>

        {/* Right Side: Book Image */}
        <div className="flex-shrink-0">
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?" // ✅ Place your image at public/images/ielts-book.png
            alt="IELTS Book"
            width={120}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default IELTSFeatureSection;
