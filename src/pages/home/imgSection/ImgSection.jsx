import React, { useState, useEffect } from "react";
import imagesJson from "./images.json";
import BtnSlider from "./BtnSlider";
import {
  ImgSectionP,
  ImgSectionP1,
  BtnNext,
  SlideParent,
  SlideDiv,
} from "../../../MainTags";

export default function ImgSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [length, setLength] = useState(imagesJson.length);
  const show = 2;

  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
  const handleNext = () => {
    if (slideIndex < length - show) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };
  const renderImages = () => {
    return (
      (display || windowWidth > 800) &&
      imagesJson.map((item) => (
        <div key={item.id}>
          <img src={require(`${item.img}`)} alt="" />
          <ImgSectionP>{item.text}</ImgSectionP>
          <ImgSectionP1>{item.date}</ImgSectionP1>
        </div>
      ))
    );
  };
  const renderImagesMobile = () => {
    const startIndex = slideIndex;
    const endIndex = startIndex + 2;
    const arr = Object.values(imagesJson);
    const visibleImages = arr.slice(startIndex, endIndex);
    return (
      <>
        <div>
          <div>
            <BtnSlider movePrev={handlePrevious} direction={"prev"} />
          </div>
        </div>
        {windowWidth <= 800 &&
          visibleImages.map((item) => (
            <div key={item.id}>
              <img src={require(`${item.img}`)} alt="" />
              <ImgSectionP>{item.text}</ImgSectionP>
              <ImgSectionP1>{item.date}</ImgSectionP1>
            </div>
          ))}
        <BtnNext>
          <BtnSlider moveNext={handleNext} direction={"next"} />
        </BtnNext>
      </>
    );
  };
  const renderImagesMobileMini = () => {
    const startIndex = slideIndex;
    const endIndex = startIndex + 1;
    const arr = Object.values(imagesJson);
    const visibleImages = arr.slice(startIndex, endIndex);
    return (
      <>
        <div>
          <div>
            <BtnSlider movePrev={handlePrevious} direction={"prev"} />
          </div>
        </div>
        {windowWidth <= 500 &&
          visibleImages.map((item) => (
            <div key={item.id}>
              <img src={require(`${item.img}`)} alt="" />
              <ImgSectionP>{item.text}</ImgSectionP>
              <ImgSectionP1>{item.date}</ImgSectionP1>
            </div>
          ))}
        <BtnNext>
          <BtnSlider moveNext={handleNext} direction={"next"} />
        </BtnNext>
      </>
    );
  };
  return (
    <SlideDiv>
      <SlideParent>
        {windowWidth <= 500 && renderImagesMobileMini()}
      </SlideParent>
      <SlideParent>
        {windowWidth <= 800 && windowWidth > 500 && renderImagesMobile()}
      </SlideParent>
      <SlideParent>{renderImages()}</SlideParent>
    </SlideDiv>
  );
}
