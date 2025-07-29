"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { fetchIELTSCourse } from "../lib/api"; // Adjust the import path as necessary

// Define types for the API response
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

type Video = {
  id: string;
  title: string;
  score: string;
  name: string;
  thumbnail: string;
  profile_image: string;
  video_url: string;
};

export default function VideoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 320;
  const CARDS_IN_VIEW = 3;
  const SCROLL_AMOUNT = CARD_WIDTH * CARDS_IN_VIEW;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);
  const [sectionTitle, setSectionTitle] = useState("Student Testimonials");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = (await fetchIELTSCourse()) as ApiResponse;
        // Find the testimonials section in the API response
        const testimonialsSection = data.sections.find(
          (section) => section.type === "testimonials"
        );

        if (testimonialsSection) {
          // Set the section title if available
          if (testimonialsSection.name) {
            setSectionTitle(testimonialsSection.name);
          }

          if (testimonialsSection.values) {
            const filteredVideos = testimonialsSection.values
              .filter((testimonial) => testimonial.video_url) // Only include items with video_url
              .map((testimonial, index) => ({
                id: testimonial.id || `video-${index}`,
                title: testimonial.testimonial || "Testimonial",
                score:
                  testimonial.description.replace("IELTS Score: ", "") || "",
                name: testimonial.name,
                thumbnail: testimonial.thumb || "/default-thumbnail.jpg",
                profile_image:
                  testimonial.profile_image || "/default-profile.jpg",
                video_url: testimonial.video_url,
              }));
            setVideos(filteredVideos);
          }
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
    <div className="relative w-full px-4 sm:px-6 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
      {/* Section Title */}
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
                  title={video.title}
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
                  IELTS Score: {video.score}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
