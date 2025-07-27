import Image from "next/image";

export type Instructor = {
  image: string;
  name: string;
  degrees: string[];
  ielts: number | string;
};

type Props = {
  instructor: Instructor;
};

const InstructorCard: React.FC<Props> = ({ instructor }) => {
  return (
   <div className="border rounded-md p-4 flex items-start space-x-4 shadow-sm max-w-2xl h-35 bg-white border-[#ffffff]">
      <Image
        src={instructor.image}
        alt={instructor.name}
        width={56}
        height={56}
        className="rounded-full object-cover"
      />
      <div>
        <h2 className="font-semibold text-gray-900 text-md flex items-center">
          {instructor.name}
        </h2>
        {instructor.degrees.map((degree, index) => (
          <p key={index} className="text-sm text-gray-700">
            {degree}
          </p>
        ))}
        <p className="text-sm text-gray-700">IELTS: {instructor.ielts}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
