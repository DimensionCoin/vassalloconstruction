"use client"
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
  ];

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden relative h-screen w-screen  bg-gradient-to-b from-[#1d1d1d] to-[#373737]">
      <div>
        <h1 className="text-5xl font-bold mb-3 text-white">Gallary</h1>
      </div>
      {/* Large Image */}
      <div className="w-full max-w-4xl h-3/5 md:h-4/5 px-4">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full h-full object-contain rounded-lg shadow-lg shadow-black py-3"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex overflow-x-auto w-full max-w-4xl px-4 mt-4 py-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="focus:outline-none mx-2 flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded-md border-2 ${
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
