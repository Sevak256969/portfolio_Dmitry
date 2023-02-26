import React from "react";
import { TextP, AOne, ATwo, TextBtn } from "../MainTags";

export default function Btn() {
  return (
    <div>
      <TextBtn>
        <AOne href="/myWorks">Мои работы</AOne>
        <ATwo href="https://www.linkedin.com/in/sevak-movsisyan-476061217/">
          Написать мне
        </ATwo>
      </TextBtn>
    </div>
  );
}
