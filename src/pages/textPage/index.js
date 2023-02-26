import React from "react";
import TextPage from "./TextPage";
import Read from "./Read";
import Com from './Com'
import { TextPageSection,TextPageDiv } from "../../MainTags";

export default function TextPageIndex() {
  return (
    <TextPageSection>
      <TextPageDiv>
        <TextPage />
        <Read />
        <Com/>
      </TextPageDiv>
    </TextPageSection>
  );
}
