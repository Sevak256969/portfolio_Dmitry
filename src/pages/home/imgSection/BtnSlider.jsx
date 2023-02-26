import React from "react";
import leftArrow from "./left.png";
import rightArrow from "./right.png";
import { SlideButton, SlideButtonNext } from "../../../MainTags";

export default function BtnSlider({ direction, movePrev, moveNext }) {
  return (
    <div>
      {direction === "prev" ? (
        <SlideButton onClick={movePrev}>
          <img src={leftArrow}></img>
        </SlideButton>
      ) : (
        <SlideButtonNext onClick={moveNext}>
          <img src={rightArrow}></img>
        </SlideButtonNext>
      )}
    </div>
  );
}
