"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { fetchIELTSCourse } from "../lib/api";

type Testimonial = {
  id: string;
  description: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_url: string;
};

type Section = {
  type: string;
  name: string;
  values: Testimonial[];
};

type ApiResponse = {
  sections: Section[];
};

export default function VideoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 320;
  const CARDS_IN_VIEW = 3;
  const SCROLL_AMOUNT = CARD_WIDTH * CARDS_IN_VIEW;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [videos, setVideos] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = (await fetchIELTSCourse()) as ApiResponse;
        
        // Find all sections that might contain videos
        const videoSections = data.sections.filter(
          section => section.type === "testimonials" || section.type === "videos"
        );

        // Extract all videos from matching sections
        const allVideos = videoSections.flatMap(section => 
          section.values.filter(item => item.video_url)
        );

        if (allVideos.length) {
          setVideos(allVideos);
        } else {
          console.warn("No videos found in API response");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const scrollAmount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [videos]);

  if (loading) {
    return <div className="text-center py-8">Loading testimonials...</div>;
  }

  if (!videos.length) {
    return (
      <div className="text-center py-8">No video testimonials available</div>
    );
  }

  return (
    <div className="relative w-full px-4 sm:px-6 md:px-8 xl:px-0 max-w-screen-xl mx-auto ">
      {/* Hardcoded Bengali Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-left">
       আপনার জন্য আরও কিছু কোর্স
      </h1>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth space-x-4 pb-4"
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-[90vw] sm:w-[300px] flex-shrink-0 bg-white border border-[#d4dce5] rounded-lg shadow-sm p-2 hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <div className="relative w-full h-[170px]">
                <iframe
                  className="rounded-md w-full h-full"
                  src={`https://www.youtube.com/embed/${video.video_url}`}
                  title={video.testimonial}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Image
                src={video.profile_image}
                alt={video.name}
                width={36}
                height={36}
                className="rounded-full w-9 h-9 object-cover"
              />
              <div>
                <p className="font-medium">{video.name}</p>
                <p className="text-sm text-gray-500">
                  {video.description || "IELTS Student"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}