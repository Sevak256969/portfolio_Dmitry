import React from "react";
import work2 from "./work2.png";
import {
  WorksDiv,
  WorksH,
  WorksP,
  WorksButtonOne,
  WorksDivBtn,
  WorksATwo,
  WorksText,
  WorksEndA,
  ImgWidth,
} from "../../MainTags";

export default function WorksEnd() {
  return (
    <WorksDiv>
      <div>
        <ImgWidth src={work2} alt="" />
      </div>
      <WorksText>
        <WorksH>codedoco.com</WorksH>
        <WorksP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
          Sagittis porttitor orci auctor in at tincidunt arcu egestas.
        </WorksP>
        <WorksDivBtn>
          <WorksButtonOne>дизайн</WorksButtonOne>
          <WorksButtonOne>создание сайта</WorksButtonOne>
          <WorksButtonOne>SMM</WorksButtonOne>
        </WorksDivBtn>
        <WorksEndA>
          <WorksATwo href="https://sevak256969.github.io/yanki">
            Перейти на сайт
          </WorksATwo>
        </WorksEndA>
      </WorksText>
    </WorksDiv>
  );
}
