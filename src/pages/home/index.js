import React from "react";
import ImgIndex from "./imgSection";
import PageIndex from "./pagination";
import { SectionMain, HomeindexDiv } from "../../MainTags";

export default function Homeindex() {
  return (
    <SectionMain>
      <HomeindexDiv>
        <ImgIndex />
        <PageIndex />
      </HomeindexDiv>
    </SectionMain>
  );
}
