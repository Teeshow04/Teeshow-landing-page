import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AnalyticFeature = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Image
            src="/images/a.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-orange-500">
            Audience tracking insights
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900  ">
            Powerful analytics tool that put you in control and are fully
            customizable
          </h1>
          <p className="mt-4 text-gray-600 text-sm fomt-medium leading-[2rem]">
            Discover where your audience comes from and what they love. Get deep
            insights into user preferences and behavior. Make smarter marketing
            decisions with real-time data. Turn visitors into loyal customers
            with actionable insights and take full control with customizable
            analytics dashboards. Measure success with real-time data and
            reports. From small startups to enterprises—we scale with you. Make
            smarter, data-driven decisions effortlessly. Would you like any
            tweaks to fit your brand's tone?
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Chat prompt module supported
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Enjoy unlimited features by paid plan
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Manage ultimate coversation
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 -transition-all  duration-200 hover:text-white">
            Explore More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticFeature;
