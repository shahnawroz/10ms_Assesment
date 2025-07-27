import Title from "@/app/components/Title";
import BodyMenu from "@/app/components/BodyMenu";
import InstructorCard, { Instructor } from "@/app/components/InstructorCard";
import FeatureCardList from "../app/components/FeatureList";

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
    <div className="flex flex-col space-y-4">
      <Title />

      <div className="flex justify-center w-full">
        <div className="">
          <BodyMenu />

          {/* Instructor Cards */}
          <div className="mt-6 ">
            <h5 className="font-semibold text-lg  mb-3">Course instructor</h5>
            {instructors.map((instructor, idx) => (
              <InstructorCard key={idx} instructor={instructor} />
            ))}
          </div>
           <div className="mt-8">
            <FeatureCardList />
          </div>
        </div>
      </div>
    </div>
  );
}
