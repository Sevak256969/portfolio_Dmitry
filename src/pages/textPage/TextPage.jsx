import React from "react";
import vector from "./Vector.png";
import {
  TextPageDivOne,
  TextPageDivTwo,
  TextPageA,
  TextPagePTwo,
  TextPagePThree,
  TextPageH2,
  TextPageDivThree,
  TextPagePFour,
  TextpageWidth,
  Img,
} from "../../MainTags";
import ellipse from "./Ellipse.png";
import image from "./image.png";

export default function TextPage() {
  return (
    <div>
      <TextPageDivOne>
        <TextPageA href="/">вернуться назад</TextPageA>
        <TextPageDivTwo>
          <TextPagePTwo>поделиться</TextPagePTwo>
          <img src={vector} alt=""></img>
        </TextPageDivTwo>
      </TextPageDivOne>
      <div>
        <TextpageWidth>
          <TextPageH2>Как создавать сайты легко</TextPageH2>
          <TextPageDivThree>
            <TextPagePFour>21.06.2020</TextPagePFour>
            <img src={ellipse} alt="" />
            <TextPagePFour>создание сайтов</TextPagePFour>
          </TextPageDivThree>
          <div>
            <TextPagePThree>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Elementum volutpat orci turpis
              urna. Et vestibulum, posuere tortor lacinia sit. Sagittis
              porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu
              sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
              massa. Egestas ornare vel volutpat.
            </TextPagePThree>
            <TextPagePThree>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat.
            </TextPagePThree>
            <Img src={image} alt="" />
            <TextPagePThree>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Elementum volutpat orci turpis
              urna. Et vestibulum, posuere tortor lacinia sit. Sagittis
              porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu
              sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
              massa. Egestas ornare vel volutpat.
            </TextPagePThree>
          </div>
        </TextpageWidth>
      </div>
    </div>
  );
}
