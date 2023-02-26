import React from "react";
import err from "./404.jpg";
import { Err404 } from "./MainTags";

export default function Error404() {
  return (
    <Err404>
      <img src={err} alt="" />
    </Err404>
  );
}
