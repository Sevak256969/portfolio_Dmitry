import React from "react";
import line from "./Line.png";
import { ReadDiv, ReadA, ReadP, ReadH2, ReadWidthDiv } from "../../MainTags";

export default function Read() {
  return (
    <ReadWidthDiv>
      <img src={line} alt="" />
      <ReadH2>Интересно почитать</ReadH2>
      <ReadDiv>
        <div>
          <div>
            <ReadA href="https://frontendconf.ru/moscow/2021">
              Как я сходил на FrontEnd Conf 2021
            </ReadA>
            <ReadP>21.06.2020</ReadP>
          </div>
          <div>
            <ReadA href="https://habr.com/ru/post/127874/">
              Как писать код быстро и ...
            </ReadA>
            <ReadP>21.06.2020</ReadP>
          </div>
        </div>
        <div>
          <div>
            <ReadA href="https://www.kns.ru/catalog/noutbuki/_tsena-ot-100000/_tsena-do-150000/">
              Купил новый ноутбук за 150 000 руб
            </ReadA>
            <ReadP>21.06.2020</ReadP>
          </div>
          <div>
            <ReadA href="https://www.youtube.com/watch?v=HojZl7TyEdU">
              Купил новый ноутбук за 150 000 руб
            </ReadA>
            <ReadP>21.06.2020</ReadP>
          </div>
        </div>
      </ReadDiv>
      <img src={line} alt="" />
    </ReadWidthDiv>
  );
}
