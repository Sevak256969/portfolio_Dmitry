import React from "react";
import Works from "./Works";
import WorksEnd from "./WorksEnd";
import { WorksSection, IndexDiv } from "../../MainTags";

export default function WorksIndex() {
  return (
    <WorksSection>
      <IndexDiv>
        <Works />
        <WorksEnd />
      </IndexDiv>
    </WorksSection>
  );
}
