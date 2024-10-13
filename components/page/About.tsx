import React from "react";
import ConstructionImage from "@/assets/vassalloicon.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg- text-gray-200 p-4 bg-gradient-to-b from-[#1d1d1d] to-[#373737]">
      <div className="relative flex flex-col items-start max-w-4xl">
        <Image
          src={ConstructionImage}
          alt="Construction Company"
          className="float-left w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 mr-8 custom-shape"
        />
        <p className="text-lg text-justify">
          Welcome to Vassallo Construction! We are a leading construction
          company with years of experience in building and renovating homes,
          offices, and commercial spaces. Our team of skilled professionals is
          dedicated to delivering high-quality workmanship and exceptional
          customer service. From initial design to final construction, we work
          closely with our clients to ensure their vision is realized. At
          Vassallo Construction, we take pride in our attention to detail,
          commitment to safety, and use of the latest construction techniques
          and materials. Whether you&apos;re looking to build a new home or
          renovate an existing space, we have the expertise and resources to
          make your project a success. Contact us today to learn more about our
          services and how we can help you with your construction needs.
        </p>
      </div>
    </div>
  );
};

export default About;
