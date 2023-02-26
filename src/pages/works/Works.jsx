import React from "react";
import work1 from "./work1.png";
import {
  WorksH2,
  WorksDiv,
  WorksH,
  WorksP,
  WorksButtonOne,
  WorksDivBtn,
  WorksATwo,
  WorksText,
  WorksA,
  ImgWidth,
} from "../../MainTags";

export default function Works() {
  return (
    <div>
      <WorksH2>Мои работы</WorksH2>
      <WorksDiv>
        <div>
          <ImgWidth src={work1} alt="" />
        </div>
        <WorksText>
          <WorksH>altermono.com</WorksH>
          <WorksP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat.
          </WorksP>
          <WorksDivBtn>
            <WorksButtonOne>дизайн</WorksButtonOne>
            <WorksButtonOne>создание сайта</WorksButtonOne>
            <WorksButtonOne>SMM</WorksButtonOne>
          </WorksDivBtn>
          <WorksA>
            <WorksATwo href="https://sevak256969.github.io/holidays/">
              Перейти на сайт
            </WorksATwo>
          </WorksA>
        </WorksText>
      </WorksDiv>
    </div>
  );
}
