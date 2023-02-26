import React, { useState } from "react";
import { NameDiv, NameH1, NameP } from "../MainTags";

export default function NameUser({ state }) {
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  return (
    <NameDiv>
      <NameH1>
        {state.fullName  || userName.fullName
          ? state.fullName || userName.fullName
          : "Дмитрий Валак"}
      </NameH1>
      <NameP>блог front-end разработчика</NameP>
    </NameDiv>
  );
}
