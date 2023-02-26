import React from "react";
import Burger from "./Burger";
import Nav from "./Nav";
import { Header1 } from "../MainTags";
import InputSearch from "./InputSearch";

export default function Header() {
  return (
    <Header1>
      <Burger />
      <Nav />
      <InputSearch />
    </Header1>
  );
}
