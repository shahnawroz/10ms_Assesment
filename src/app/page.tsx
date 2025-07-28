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
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10 flex flex-col lg:flex-row gap-10 items-start">
        {/* Right Sidebar (Sticky Box) */}

        {/* Left Content */}
        <div className="flex-1 space-y-10">
          {/* Title Section at top of left column */}
          <TitleSection />

          {/* Instructor Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Course instructor</h5>
            {instructors.map((instructor, idx) => (
              <InstructorCard key={idx} instructor={instructor} />
            ))}
          </div>

          {/* Features Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4">
              How the course is laid out
            </h5>
            <FeatureCardList />
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">
              How the course is laid out
            </h5>
            <IELTSGuideCard />
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">
              What you will learn by doing the course
            </h5>
            <FeatureSection />
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Content preview</h5>
            <AccordionSection />
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Course Details</h5>
            <CourseDetails />
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Course Exclusive Feature</h5>
            <ImageContent />
          </div>
        </div>
        <div className="order-first w-full lg:order-none lg:w-[320px] lg:shrink-0 lg:sticky lg:top-10 space-y-4">
          {/* Course Preview Image */}
          <Image
            src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
            alt="Course Banner"
            className="rounded-md w-full object-cover"
            width={320}
            height={180}
            layout="responsive"
          />

          {/* Pricing & CTA */}
          <div className="text-center bg-gray-50 p-4 rounded-md shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              ৳3850
              <span className="line-through text-sm text-gray-500 ml-2">
                ৳5500
              </span>
            </h3>
            <p className="text-green-600 font-semibold text-sm">৩০% ছাড় চলছে</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200">
              এখনই ভর্তি হন
            </button>
          </div>

          {/* Features List */}
          <ul className="text-sm text-gray-700 space-y-1">
            <li>✅ ১০০+ ভিডিও লেসন</li>
            <li>📜 সার্টিফিকেট</li>
            <li>📱 মোবাইল ও কম্পিউটারে দেখার সুবিধা</li>
            <li>⏳ লাইফটাইম অ্যাক্সেস</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
