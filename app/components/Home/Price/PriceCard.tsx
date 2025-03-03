import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  price: number;
  plan: string;
  text: string[];
};
const PriceCard = ({ plan, price, text = [] }: Props) => {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg">
      <p className="mt-8 text-xl font-semibold text-blue-600 text-center">
        {plan} Plan
      </p>
      <div className="font-medium text-3xl mt-4 text-center">
        $<span className="text-5xl font-bold">{price}</span>/month
      </div>
      <p className="mt-2 text-gray-600 text-center">Per user</p>
      <div className="mt-10">
        {/* mapping over the text array */}
        {text.map((item, index) => (
          <div
            key={index}
            className="text-center mb-4 flex items-center space-x-3 "
          >
            <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col ">
              <FaCheck className="text-green-700" />
            </div>
            <p className="text-sm font-semibold text-gray-700">{item}</p>
          </div>
        ))}
        <div className="mt-8">
          <button className="block w-full p-4 text-base md:text-lg text-white font-bold hover:bg-blue-950 transition-all duration-300 bg-blue-900 rounded">
            Start 14 Days Free Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
