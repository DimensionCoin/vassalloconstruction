"use client";
import React, { useState } from "react";
import retainingWallsImg from "@/assets/retainingwalls.png";
import foundationImg from "@/assets/foundations.png";
import additionalFoundationImg from "@/assets/additionalfoundation.png";
import suspendedSlabImg from "@/assets/suspendedslab.png";
import stairwellImg from "@/assets/stairwell.png";
import walkwayImg from "@/assets/walkway.png";
import drivewayImg from "@/assets/driveway.png";
import bollardImg from "@/assets/bollard.png";
import Img1 from "@/assets/img1.jpg";
import Img2 from "@/assets/img2.jpg";
import Img3 from "@/assets/img3.jpg";
import Img4 from "@/assets/img4.jpg";
import Img5 from "@/assets/img5.jpg";
import Img6 from "@/assets/img6.jpg";
import WalkWayGal from "@/assets/walkwaygal.png";
import Image from "next/image";
import BeforeDeck from "@/assets/beforedeck.jpg"
import AfterDeck from "@/assets/afterdeck.jpg";



const Gallary = () => {
  // Array of image objects
  const images = [
    { src: retainingWallsImg, alt: "Retaining Walls" },
    { src: foundationImg, alt: "Foundations" },
    { src: additionalFoundationImg, alt: "Additional Foundations" },
    { src: suspendedSlabImg, alt: "Suspended Slab" },
    { src: stairwellImg, alt: "Stairwell" },
    { src: walkwayImg, alt: "Walkway" },
    { src: drivewayImg, alt: "Driveway" },
    { src: bollardImg, alt: "Bollard" },
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
    { src: Img5, alt: "Image 5" },
    { src: Img6, alt: "Image 6" },
    { src: WalkWayGal, alt: "Walkway Gallery" },
    { src: BeforeDeck, alt: "Before Deck" },
    { src: AfterDeck, alt: "After Deck" },
  ];

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#1d1d1d] to-[#373737] relative">
      {/* Title at the Top */}
      <div className=" top-5">
        <h1 className="text-4xl font-bold text-white">Gallery</h1>
      </div>

      {/* Large Image with Extra Space Below */}
      <div className="w-full max-w-3xl h-2/5 md:h-3/5 px-4 mt-16 mb-8">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full h-full object-contain rounded-lg shadow-lg shadow-black"
        />
      </div>

      {/* Thumbnails with Increased Space Above */}
      <div className="flex overflow-x-auto w-full max-w-3xl px-4 py-2 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="focus:outline-none mx-1 flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className={`w-12 h-12 md:w-16 md:h-16 object-cover rounded-md border-2 ${
                selectedImage.src === image.src
                  ? "border-white"
                  : "border-transparent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
