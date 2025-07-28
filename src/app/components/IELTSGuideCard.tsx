import Image from "next/image";

const FeatureList = () => {
  return (
    <div className="bg-[#0A1629] p-6 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {/* Left side - Image with text below */}
        <div className="flex flex-col gap-4">
          <div className=" rounded-lg overflow-hidden w-full">
            <Image
              src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621183218.png"
              alt="Free PDF"
              width={400}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold text-gray-300">
              IELTS Confirm 7+ Score (Guideline)
            </h4>
            <p className="text-sm mt-1">
              IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।
            </p>
          </div>
        </div>

        {/* Right side - Image only */}
        <div className="bg-[#1A2A42] rounded-lg overflow-hidden w-full h-auto">
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg"
            alt="IELTS Preparation"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureList;