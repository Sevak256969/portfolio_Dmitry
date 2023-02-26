import React from "react";
import Aside from "./Aside";
import NameUser from "./NameUser";
import Text from "./Text";
import { useLocation } from "react-router-dom";
import { AsideDiv } from "../MainTags";

export default function AsideIndex() {
  const { state } = useLocation();
  return (
    <AsideDiv>
      <Aside state={{ ...state }} />
      <NameUser state={{ ...state }} />
      <Text />
    </AsideDiv>
  );
}
