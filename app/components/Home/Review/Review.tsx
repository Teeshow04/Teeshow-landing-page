"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]" id="Review">
      <h1 className="mt-text-2xl md:text-3xl capitalize font-bold text-center">
        Reviews About Us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
          showDots
        >
          <ReviewCard
            name="Daniel Ale"
            image="/images/c1.png"
            profession="CTO Capitalsage Holdings"
            text="I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations."
          />
          <ReviewCard
            name="Samson Okemakinde"
            image="/images/c2.png"
            profession="Head Of Engineering"
            text="I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life"
          />
          <ReviewCard
            name="Gideon Ebunoluwa"
            image="/images/c3.png"
            profession="Head Of Products"
            text="I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results."
          />
          <ReviewCard
            name="Isioma Ugbah"
            image="/images/c4.png"
            profession="Senior Software Engineer"
            text="The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future"
          />
          <ReviewCard
            name="Tunde Arowolaju"
            image="/images/c5.png"
            profession="Software Engineer"
            text="Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service."
          />
          <ReviewCard
            name="Evans Okoro"
            image="/images/c6.png"
            profession="Fullstark Engineer"
            text="Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!"
          />
          <ReviewCard
            name="Bukola Adeniran"
            image="/images/c7.png"
            profession="Senior QA Engineer"
            text="Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!"
          />
          <ReviewCard
            name="Clara Ogunwole"
            image="/images/c8.png"
            profession="Product Manager"
            text="I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results."
          />
        </Carousel>
      </div>
    </div>
  );
};
