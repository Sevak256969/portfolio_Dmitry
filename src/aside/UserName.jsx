import React, { useState } from "react";
import { NameDiv, NameH1, NameP } from "../MainTags";

export default function UserName({ state }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("data")) || null
  );
  return (
    <NameDiv>
      <NameH1>
        {windowWidth <= 800 || userName.fullName
          ? userName.fullName
          : "Дмитрий Валак"}
      </NameH1>
      <NameP>блог front-end разработчика</NameP>
    </NameDiv>
  );
}
