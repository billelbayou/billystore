"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export default function Carousel({imagesUrl}: {imagesUrl: StaticImageData[]}) {
  const [imageIndex, setImageIndex] = useState(1);

  function handlePrevious() {
    if (imageIndex === imagesUrl.length - 2) return;
    else {
      setImageIndex((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (imageIndex === -1) return;
    else {
      setImageIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="w-full h-full mx-auto mt-10 relative flex items-center">
      <button onClick={handleNext}>
        <FaRegArrowAltCircleLeft size={50} />
      </button>
      <div className="flex overflow-hidden">
        {imagesUrl.map((url, index) => (
          <Image
            key={`${url}`}
            className={`w-1/3 ${imageIndex === index - 1 ? "" : "scale-75"}`}
            src={url}
            alt=""
            style={{
              translate: `${-100 * imageIndex}%`,
              transition: "all 0.3s",
              borderRadius: "20px",
            }}
          />
        ))}
      </div>
      <button onClick={handlePrevious}>
        <FaRegArrowAltCircleRight size={50} />
      </button>
    </div>
  );
}
