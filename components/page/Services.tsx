"use client"
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import retainingWallsImg from "@/assets/retainingwalls.png";
import foundationImg from "@/assets/foundations.png";
import additionalFoundationImg from "@/assets/additionalfoundation.png";
import suspendedSlabImg from "@/assets/suspendedslab.png";
import stairwellImg from "@/assets/stairwell.png";
import walkwayImg from "@/assets/walkway.png";
import drivewayImg from "@/assets/driveway.png";
import bollardImg from "@/assets/bollard.png";
import Image, { StaticImageData } from "next/image";

interface Item {
  id: number;
  title: string;
  img: StaticImageData | string;
  desc: string;
}

const items = [
  {
    id: 1,
    title: "Foundations",
    img: foundationImg,
    desc: "We specialize in constructing strong and reliable foundations that form the backbone of any building project, ensuring stability and longevity.",
  },
  {
    id: 2,
    title: "Additional Foundations",
    img: additionalFoundationImg,
    desc: "Our team provides supplementary foundation solutions for existing structures, enhancing support and accommodating expansions or renovations.",
  },
  {
    id: 3,
    title: "Retaining Walls",
    img: retainingWallsImg,
    desc: "We design and build durable retaining walls that effectively manage soil and water pressure, preventing erosion and adding aesthetic appeal.",
  },
  {
    id: 4,
    title: "Suspended Slabs",
    img: suspendedSlabImg,
    desc: "Our expertise includes the installation of suspended slabs for multi-story buildings, providing robust flooring solutions that meet structural requirements.",
  },
  {
    id: 5,
    title: "Stairs",
    img: stairwellImg,
    desc: "We craft custom staircases that combine functionality and design, enhancing accessibility and the overall look of your space.",
  },
  {
    id: 6,
    title: "Walk Ways",
    img: walkwayImg,
    desc: "Our walkway installations offer safe and attractive pathways for residential and commercial properties, using quality materials for lasting results.",
  },
  {
    id: 7,
    title: "Driveways",
    img: drivewayImg,
    desc: "We install durable concrete driveways that enhance curb appeal and withstand daily use, tailored to complement your property's style.",
  },
  {
    id: 8,
    title: "Bollard Installs",
    img: bollardImg,
    desc: "Our bollard installation services provide security and traffic control solutions, with a range of options to suit different needs and environments.",
  },
];

const Single = ({ item }: { item: Item }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView) {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    });
  }

  return (
    <motion.section
      ref={ref}
      initial={{ x: 200, opacity: 0 }}
      animate={controls}
      className="w-screen h-screen flex items-center px-6 py-20 justify-center overflow-hidden"
    >
      <div className="flex flex-col md:flex-row w-full h-full max-w-screen-xl mx-auto">
        <div className="flex-1 h-1/2 md:h-full">
          <Image
            src={item.img}
            alt={item.title}
            className="w-full h-[80%] object-cover shadow-lg shadow-black rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8 p-4 text-center justify-center items-center place-content-center">
          <h2 className="text-3xl md:text-6xl">{item.title}</h2>
          <p className="text-gray-500 text-base md:text-xl">{item.desc}</p>
        </div>
      </div>
    </motion.section>
  );
};

const Services = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className="relative h-screen w-screen overflow-y-scroll bg-gradient-to-b from-[#1d1d1d] to-[#373737]"
    >
      <div className="sticky px-3 top-0 left-0 w-full text-center text-white text-2xl md:text-4xl py-4 z-10">
        <h1>Our Services</h1>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Services;
