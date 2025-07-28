// components/FeatureSection.tsx
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  features: string[];
  imageSrc: string;
  imageAlt?: string;
}

export default function ImageFeatureCard({
  title,
  features,
  imageSrc,
  imageAlt = "Section image",
}: FeatureSectionProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="flex-1 space-y-2">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-40 shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={160}
          height={160}
          className="object-contain rounded-md"
        />
      </div>
    </div>
  );
}
