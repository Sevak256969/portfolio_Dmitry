import React from "react";
import {
  SearchResultH2,
  Img,
  TextH2,
  TextPageP,
  TextDiv,
  TextDivBtn,
  EndDiv,
  TextPagePTwo,
  WidthDiv,
  LinkM,
  SearchP,
} from "../../MainTags";
import { useLocation } from "react-router-dom";

export default function SearchResult({ open }) {
  const { state } = useLocation();
  return (
    <div>
      <SearchResultH2>Результаты поиска “Создание сайта”</SearchResultH2>
      {state.length ? (
        state.map((item) => (
          <TextDiv key={item.id}>
            <Img src={item.assets} alt="" />
            <WidthDiv>
              <TextH2>{item.title}</TextH2>
              <TextPageP>{item.description}</TextPageP>
              <TextDivBtn>
                <EndDiv>
                  <TextPageP>{item.date}</TextPageP>
                  <img src={item.icon} alt="" />
                  <TextPagePTwo>{item.text}</TextPagePTwo>
                </EndDiv>
                <LinkM>
                  <a href={item.url}>{item.button}</a>
                </LinkM>
              </TextDivBtn>
            </WidthDiv>
          </TextDiv>
        ))
      ) : (
        <SearchP>По результату поиска ничего не найдено!</SearchP>
      )}
    </div>
  );
}
