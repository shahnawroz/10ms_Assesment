// components/IELTSFeatureCard.tsx
import ImageFeatureCard from "./ImageFeatureCard";

export default function IELTSFeatureCard() {
  return (
    <div className="border border-[#d4dce5] rounded-xl p-6 bg-white shadow-sm max-w-5xl mx-auto space-y-6">
     
        <ImageFeatureCard
        title="ভিডিও লেকচার"
        features={[
          "IELTS Academic ও General Training নিয়ে আলোচনা",
          "Reading, Writing, Listening ও Speaking এর Overview & Format",
          "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
          "ভিডিওর সাথে প্র্যাকটিসের সুযোগ",
        ]}
        imageSrc="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png"
      />

      <hr className="border-t border-[#d4dce5]" />

      <ImageFeatureCard
        title="Reading ও Listening Mock Tests"
        features={[
          "10 Reading & 10 Listening Mock Tests",
          "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
          "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
          "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট",
        ]}
        imageSrc="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png"
      />
    </div>
  );
}
