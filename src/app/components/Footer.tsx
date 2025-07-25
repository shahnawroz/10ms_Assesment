"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white text-gray-700 py-8 px-6 md:px-12 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section: Logo + App Download */}
        <div className="flex flex-col items-start space-y-3 min-w-[220px]">
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            alt="10 Minute School"
            width={140}
            height={40}
            className="object-contain"
          />
          <p className="text-sm text-gray-600">
            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
          </p>
          <div className="flex space-x-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.tenminuteschool.student"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play Store"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/app/10-minute-school/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Middle Sections: Company and Others */}
        <div className="flex flex-col sm:flex-row gap-12 flex-1 justify-center text-sm text-gray-600">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">কোম্পানি</h3>
            <ul className="space-y-2">
              <li>ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</li>
              <li>শিক্ষক হিসেবে যোগ দিন</li>
              <li>অ্যাফিলিয়েট হিসেবে যোগ দিন</li>
              <li>প্রাইভেসি পলিসি</li>
              <li>রিফান্ড পলিসি</li>
              <li>ব্যবহারকারীর শর্তাবলি</li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">অন্যান্য</h3>
            <ul className="space-y-2">
              <li>ব্লগ</li>
              <li>ফ্রি নোটস ও গাইড</li>
              <li>চাকরি প্রস্তুতি কোর্সসমূহ</li>
              <li>সার্টিফিকেট ভেরিফাই করুন</li>
              <li>ফ্রি ডাউনলোড</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact & Social */}
        <div className="flex flex-col min-w-[220px]">
          <h3 className="font-semibold text-gray-900 mb-3">আমাদের যোগাযোগ মাধ্যম</h3>
          <ul className="text-sm text-gray-600 space-y-1 mb-4">
            <li>
              কল করুন: <span className="text-green-600 font-semibold">16910</span> (24x7)
            </li>
            <li>
              হোয়াটসঅ্যাপ:{" "}
              <a
                href="https://wa.me/8801896016252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                +8801896016252
              </a>{" "}
              (24x7)
            </li>
            <li>
              দেশের বাইরে থেকে:{" "}
              <a
                href="tel:+8809610916910"
                className="text-green-600 underline"
              >
                +880 9610916910
              </a>
            </li>
            <li>
              ইমেইল:{" "}
              <a
                href="mailto:support@10minuteschool.com"
                className="text-green-600 underline"
              >
                support@10minuteschool.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-700">
            <a
              href="https://facebook.com/10minuteschool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com/10minuteschool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/10minuteschool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://youtube.com/10minuteschool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://tiktok.com/@10minuteschool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>

          {/* Copyright */}
        
        </div>
         
      </div>
       <p className="mt-6 text-xs text-gray-400 text-center">
            স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
    </footer>
  );
}
