import React, { useState } from "react";
import aside from "./aside.png";
import ellipse from "./Ellipse.png";
import {
  AsideImgTwo,
  AsideImgONe,
  AsideImgDiv,
  AsideImgThree,
} from "../MainTags";

export default function AsideMob({ state }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [userImg, setUserImg] = useState(
    JSON.parse(localStorage.getItem("data")) || null
  );
  return (
    <AsideImgDiv>
      <AsideImgONe src={aside} alt="" />
      <AsideImgTwo
        src={
          windowWidth <= 800 || userImg.img ? (
            userImg.img
          ) : (
            <AsideImgThree src={ellipse} alt="" />
          )
        }
        alt=""
      />
    </AsideImgDiv>
  );
}
