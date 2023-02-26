import React from "react";
import { TextP, AOne, ATwo, TextBtn, AsideTextDiv, NameUl } from "../MainTags";
import iconItems from "./dataAside.json";
import img from "./Line.png";

export default function Text() {
  return (
    <AsideTextDiv>
      <NameUl>
        {iconItems.map((item) => (
          <li key={item.id}>
            <a key={item.id} href={item.path}>
              <img src={require(`${item.img}`)} alt="" />
            </a>
          </li>
        ))}
      </NameUl>
      <img src={img} alt="" />
      <TextP>
        Front-end разработчик. Практик верстки сайтов. Созданием сайтов
        занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
        более 10 000 часов в создании сайтов различной сложности.
      </TextP>
      <img src={img} alt="" />
      <TextBtn>
        <AOne href="/myWorks">Мои работы</AOne>
        <ATwo href="https://www.linkedin.com/in/sevak-movsisyan-476061217/">
          Написать мне
        </ATwo>
      </TextBtn>
    </AsideTextDiv>
  );
}
