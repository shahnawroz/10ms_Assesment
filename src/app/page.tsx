import TitleSection from "@/app/components/Title";
import BodyMenu from "@/app/components/BodyMenu";
import InstructorCard, { Instructor } from "@/app/components/InstructorCard";
import FeatureCardList from "@/app/components/FeatureList";
import Image from "next/image";
import IELTSGuideCard from "./components/IELTSGuideCard";
import FeatureSection from "./components/FeatureSection";
import AccordionSection from "./components/AccordionSection";
import CourseDetails from "./components/CourseDetails";
import ImageContent from "./components/ImageContent";
import IELTSFeatureSection from "./components/IELTSFeatureSection";
import VideoSlider from "./components/VideoSlider";
import IeltsFeatureCourse from "./components/IELTSFeatureCourse";
import PaymentCard from "./components/PaymentCard";
import FAQ from "./components/FaqSection";
import RightSidebar from "./components/RightSidebar";
import VideoSlider1 from "./components/moreVideos";

export default function Home() {
  const instructors: Instructor[] = [
    {
      name: "Munzereen Shahid",
      image: "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg",
      degrees: [
        "MSc (English), University of Oxford (UK);",
        "BA, MA (English), University of Dhaka;",
      ],
      ielts: 8.5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Sticky Body Menu */}
      <div className="w-full border-b border-gray-200 bg-white sticky top-0 z-10">
        <BodyMenu />
      </div>

      {/* Page Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 flex flex-col lg:flex-row gap-6 md:gap-10 items-start">
        {/* Left Content - Main content area */}
        <div className="flex-1 w-full lg:w-auto space-y-8 md:space-y-10 order-2 lg:order-1">
          {/* Title Section at top of left column */}
          <TitleSection />

          {/* Instructor Section */}
          <div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Course instructor
            </h5>
            {instructors.map((instructor, idx) => (
              <InstructorCard key={idx} instructor={instructor} />
            ))}
          </div>

          {/* Features Section */}
          <div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              How the course is laid out
            </h5>
            <FeatureCardList />
          </div>

          <div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              How the course is laid out
            </h5>
            <IELTSGuideCard />
          </div>

          <div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              What you will learn by doing the course
            </h5>
            <FeatureSection />
          </div>

          <div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Content preview
            </h5>
            <AccordionSection />
          </div>

          <div>
            <CourseDetails />
          </div>

          <div>
            <ImageContent />
          </div>

          <div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Free items with this products-
            </h5>
            <IELTSFeatureSection />
          </div>

          <div>
            <VideoSlider />
          </div>

          <div>
            <IeltsFeatureCourse />
          </div>

          <div>
            <PaymentCard />
          </div>

          <div>
            <FAQ />
          </div>
        </div>

        {/* Right Sidebar - Sticky on desktop, appears first on mobile */}
        <div className="w-full lg:w-[320px] order-1 lg:order-2 lg:sticky lg:top-6 space-y-4 mb-6 lg:mb-0">
          {/* Course Preview Image */}
          <RightSidebar />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoSlider1 />
      </div>
    </div>
  );
}
