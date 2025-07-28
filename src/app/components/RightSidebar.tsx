// components/RightSidebar.tsx
import Image from "next/image";
import React from "react";

const RightSidebar = () => {
  // Data moved inside the component
  const sidebarData = {
    imageUrl: "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg",
    currentPrice: "৳3850",
    originalPrice: "৳5500",
    discountText: "৩০% ছাড় চলছে",
    buttonText: "এখনই ভর্তি হন",
    features: [
      { icon: "✅", text: "১০০+ ভিডিও লেসন" },
      { icon: "📜", text: "সার্টিফিকেট" },
      { icon: "📱", text: "মোবাইল ও কম্পিউটারে দেখার সুবিধা" },
      { icon: "⏳", text: "লাইফটাইম অ্যাক্সেস" },
    ],
  };

  return (
    <div className="w-full lg:w-[320px] order-1 lg:order-2 lg:sticky lg:top-6 space-y-4 mb-6 lg:mb-0">
      {/* Course Preview Image */}
      <div className="relative aspect-video rounded-md overflow-hidden">
        <Image
          src={sidebarData.imageUrl}
          alt="Course Banner"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 320px"
        />
      </div>

      {/* Pricing & CTA */}
      <div className="text-center bg-gray-50 p-4 rounded-md shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          {sidebarData.currentPrice}
          <span className="line-through text-xs sm:text-sm text-gray-500 ml-2">
            {sidebarData.originalPrice}
          </span>
        </h3>
        <p className="text-green-600 font-semibold text-xs sm:text-sm">
          {sidebarData.discountText}
        </p>

        <button className="mt-3 sm:mt-4 w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200 text-sm sm:text-base">
          {sidebarData.buttonText}
        </button>

        {/* Features List */}
        <ul className="text-xs sm:text-sm text-gray-700 space-y-1 px-2">
          {sidebarData.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">{feature.icon}</span> {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
