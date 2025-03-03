import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this application
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/i1.png"
            title="create Free Account"
            linkText="Start Earning"
            text="Sign up in seconds and unlock powerful insights.
  No hidden fees—just seamless access to analytics.
Start tracking your audience with ease and precision.
Join thousands who trust our platform for growth."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/i2.png"
            title="Monitor User Analytics"
            linkText="Sign up your store"
            text="Track user behavior in real-time with detailed reports.
Understand how visitors interact with your content.
Optimize your strategy with data-driven decisions.
Stay ahead by monitoring key performance trends."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/i3.png"
            title="Safe & Trusted"
            linkText="Get The App"
            text="Your data security is our top priority.
We use encryption and compliance measures to protect you.
Trusted by businesses worldwide for reliable analytics.
Analyze with confidence, knowing your data is safe."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/i4.png"
            title="Fast Customer Support"
            linkText="Learn More"
            text="Need help? Our team is here 24/7.
Get instant solutions from real experts.
We prioritize quick, effective, and friendly support.
Your success is our mission—reach out anytime!"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
