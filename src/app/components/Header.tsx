"use client";

import Image from "next/image";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const navItems = [
  {
    label: "ক্লাস ৬-১২",
    submenu: [
      "ক্লাস ৬",
      "ক্লাস ৭",
      "ক্লাস ৮",
      "ক্লাস ৯",
      "ক্লাস ১০",
      "ক্লাস ১১",
      "ক্লাস ১২",
    ],
  },
  {
    label: "স্কিলস",
    submenu: ["কম্পিউটার স্কিল", "ডিজাইন স্কিল", "প্রোগ্রামিং", "মার্কেটিং"],
  },
  {
    label: "ভর্তি পরীক্ষা",
    submenu: ["এইচএসসি ভর্তি", "ইউনিভার্সিটি ভর্তি", "স্কুল ভর্তি"],
  },
  {
    label: "অনলাইন ব্যাচ",
    submenu: ["ব্যাচ ১", "ব্যাচ ২", "ব্যাচ ৩"],
  },
  {
    label: "ইংলিশ সেন্টার",
    submenu: ["ব্যাকরণ", "কথোপকথন", "শুনুন"],
  },
  {
    label: "আরো",
    submenu: ["ব্লগ", "ক্যারিয়ার", "সাপোর্ট"],
  },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-3 relative z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center min-w-[120px]">
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            alt="10 Minute School"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Search Bar with icon */}
        <div className="flex-1 relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="স্কিল কোর্স, কিশোর স্কুল প্রোগ্রাম সার্চ করুন..."
            className="w-full rounded-full border border-gray-300 px-12 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden xl:flex items-center space-x-4 text-sm font-medium text-gray-700 whitespace-nowrap relative">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                className="flex items-center gap-1 hover:text-red-500 transition-colors duration-200 focus:outline-none"
                type="button"
              >
                {item.label} <FiChevronDown className="text-xs" />
              </button>

              <ul
                className="
      absolute left-0 top-full
      w-48 bg-white border border-gray-200 rounded shadow-lg
      text-gray-800 opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-opacity duration-200 z-50
      pointer-events-auto
    "
              >
                {item.submenu.map((subItem) => (
                  <li
                    key={subItem}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                    onClick={() => {
                      // handle submenu click here
                    }}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3 text-sm font-medium whitespace-nowrap">
          <button className="border px-2 py-1 rounded text-gray-700">EN</button>
          <span className="text-green-600 font-semibold">📞 16910</span>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            লগ-ইন
          </button>
        </div>
      </div>
    </header>
  );
}
