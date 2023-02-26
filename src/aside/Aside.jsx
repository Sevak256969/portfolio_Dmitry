import React, { useState } from "react";
import aside from "./aside.png";
import ellipse from "./Ellipse.png";
import {
  AsideImgTwo,
  AsideImgONe,
  AsideImgDiv,
  AsideImgThree,
} from "../MainTags";

export default function Aside({ state }) {
  const [userImg, setUserImg] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  return (
    <AsideImgDiv>
      <AsideImgONe src={aside} alt="" />
      <AsideImgTwo
        src={
          state.img || userImg.img ? (
            state.img || userImg.img
          ) : (
            <AsideImgThree src={ellipse} alt="" />
          )
        }
        alt=""
      />
    </AsideImgDiv>
  );
}
