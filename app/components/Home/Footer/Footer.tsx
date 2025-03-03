import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { footerSections } from "../../constant/constant";

const Footer = () => {
  return (
    <div className="bg-white py-10" id="Footer">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-3xl md:text-4xl text-pink-700">Tee</span>
              Show
            </h1>
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%]  text-gray-600">
              A brand you can rely on anytime, delivering excellence with every
              experience. We take pride in offering only the best, ensuring
              quality and trust in everything we do. Your satisfaction is our
              priority, and we go the extra mile to exceed expectations.
            </p>
          </div>

          {/* footer sectios */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h3>

              {/* section Links */}
              {section.links ? (
                <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                  {section.links.map((item, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                    <li className="flex item-center">
                      <FaMapMarkedAlt className="mr-2" />
                      {section.contactInfo.address}
                    </li>
                    <li className="flex item-center">
                      <FaPhoneAlt className="mr-2" />
                      {section.contactInfo.phone}
                    </li>
                    <li className="flex item-center">
                      <FaClock className="mr-2" />
                      {section.contactInfo.time}
                    </li>
                    <li className="flex item-center">
                      <FaEnvelope className="mr-2" />
                      {section.contactInfo.email}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Bottom section */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} TeeShow. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Social : </span>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaDribbble />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
