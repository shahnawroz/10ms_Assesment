// components/RightSidebar.tsx
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { fetchIELTSCourse } from "../lib/api"; // Adjust the import path as needed

interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

interface CourseData {
  media: MediaItem[];
  current_price: string;
  original_price: string;
  discount_text: string;
  // Add other fields you need from the API response
}

const RightSidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIELTSCourse();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const nextVideo = () => {
    if (!courseData?.media) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    if (!courseData?.media) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredVideos.length - 1 : prevIndex - 1
    );
  };

  if (loading)
    return (
      <div className="w-full lg:w-[320px] h-64 flex items-center justify-center">
        Loading...
      </div>
    );
  if (!courseData)
    return (
      <div className="w-full lg:w-[320px] h-64 flex items-center justify-center">
        No data available
      </div>
    );

  // Filter only preview_gallery videos
  const filteredVideos = courseData.media.filter(
    (item) => item.name === "preview_gallery" && item.resource_type === "video"
  );

  if (filteredVideos.length === 0)
    return (
      <div className="w-full lg:w-[320px] h-64 flex items-center justify-center">
        No videos available
      </div>
    );

  return (
    <div className="w-full lg:w-[400px] order-1 lg:order-2 lg:sticky lg:top-6 space-y-4 mb-6 lg:mb-0">
      {/* Video Slider */}
      <div
        className="relative rounded-md overflow-hidden w-full lg:w-[400px]"
        style={{ height: "400px" }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${filteredVideos[currentIndex].resource_value}?autoplay=0`}
          title="Course Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>

        {/* Navigation Arrows */}
        {filteredVideos.length > 1 && (
          <>
            <button
              onClick={prevVideo}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Previous video"
            >
              {/* SVG */}
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Next video"
            >
              {/* SVG */}
            </button>
          </>
        )}
      </div>

      {/* Pricing & CTA */}
      <div className="text-center bg-gray-50 p-4 rounded-md shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          {courseData.current_price}
          <span className="line-through text-xs sm:text-sm text-gray-500 ml-2">
            {courseData.original_price}
          </span>
        </h3>
        <p className="text-green-600 font-semibold text-xs sm:text-sm">
          {courseData.discount_text}
        </p>

        <button className="mt-3 sm:mt-4 w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200 text-sm sm:text-base">
          Enroll Now
        </button>
      </div>

      {/* Features List */}
      <ul className="text-xs sm:text-sm text-gray-700 space-y-1 px-2">
        <li className="flex items-start">
          <span className="mr-2">✅</span> 100+ Video Lessons
        </li>
        <li className="flex items-start">
          <span className="mr-2">📜</span> Certificate
        </li>
        <li className="flex items-start">
          <span className="mr-2">📱</span> Mobile & Computer Access
        </li>
        <li className="flex items-start">
          <span className="mr-2">⏳</span> Lifetime Access
        </li>
      </ul>
    </div>
  );
};

export default RightSidebar;
