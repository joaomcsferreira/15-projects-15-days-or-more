"use client";

import React from "react";
import ArrowLeftIcon from "./Helper/ArrowLeftIcon";
import ArrowRightIcon from "./Helper/ArrowRightIcon";
import Search from "./Search";

const imagesRef = [
  { id: 1, src: { original: "./unsplash_1.png" }, alt: "unsplash_1", avg_color: "#514455" },
  { id: 2, src: { original: "./unsplash_2.png" }, alt: "unsplash_2", avg_color: "#a2c6c6" },
  { id: 3, src: { original: "./unsplash_3.png" }, alt: "unsplash_3", avg_color: "#64a8f9" },
  { id: 4, src: { original: "./unsplash_4.png" }, alt: "unsplash_4", avg_color: "#e8aeaa" },
  { id: 5, src: { original: "./unsplash_5.png" }, alt: "unsplash_5", avg_color: "#15434c" },
];

const positionsRef = [
  {
    id: 1,
    position: "left-[50%] translate-x-[-50%]",
    z: "z-20",
    width: "w-[650px]",
    height: "h-[325px]",
  },
  {
    id: 2,
    position: "left-[95%] translate-x-[-500px]",
    z: "z-10",
    width: "w-[500px]",
    height: "h-[250px]",
  },
  {
    id: 3,
    position: "left-[100%] translate-x-[-300px]",
    z: "z-0",
    width: "w-[300px]",
    height: "h-[125px]",
  },
  { id: 4, position: "left-0", z: "z-0", width: "w-[300px]", height: "h-[125px]" },
  { id: 5, position: "left-[5%]", z: "z-10", width: "w-[500px]", height: "h-[250px]" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [images, setImages] = React.useState(imagesRef);
  const [positions, setPositions] = React.useState(positionsRef);

  const imagesSize = images.length - 1;

  function orderArrayAsCarousel(direction: "forward" | "backward") {
    const array = [...positions];
    let currentIndex = 1;

    if (direction === "backward") {
      currentIndex = array.length - 1;
    }

    const rest = array.splice(currentIndex);
    const orderedArray = [...rest, ...array];

    setPositions(orderedArray);
  }

  const handleClickLeft = () => {
    if (currentIndex === 0) setCurrentIndex(imagesSize);
    else setCurrentIndex((currentIndex) => currentIndex - 1);

    orderArrayAsCarousel("forward");
  };

  const handleClickRight = () => {
    if (currentIndex === imagesSize) setCurrentIndex(0);
    else setCurrentIndex((currentIndex) => currentIndex + 1);

    orderArrayAsCarousel("backward");
  };

  React.useEffect(() => {}, [currentIndex]);

  return (
    <>
      <div className="flex flex-col w-[900px] h-full">
        <div className={"relative h-[370px]"}>
          {images.map((image, index) => (
            <img
              style={{ backgroundColor: image.avg_color }}
              className={`object-cover rounded-3xl transition-all duration-300 absolute top-[50%] translate-y-[-50%] 
              ${positions[index].z}
              ${positions[index].position} 
              ${positions[index].width}
              ${positions[index].height}
            `}
              key={image.id}
              src={image.src.original}
              alt={image.alt}
            />
          ))}
        </div>

        <div className="flex gap-5 self-center">
          <button onClick={handleClickLeft} className="w-4">
            <ArrowLeftIcon />
          </button>

          <div className="flex gap-1 items-center">
            {images.map((image) => (
              <div
                key={image.id}
                style={{
                  backgroundColor: currentIndex + 1 === image.id ? "#7B61FF" : "#999999",
                }}
                className={`w-2 h-2 rounded-full`}
              />
            ))}
          </div>

          <button onClick={handleClickRight} className="w-4">
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <Search setImages={setImages} />
    </>
  );
};

export default Carousel;
