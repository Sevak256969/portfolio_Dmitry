import React from "react";
import menuItems from "./header.json";
import { NavUlBar } from "../MainTags";
import MenuItems from "./Menuitems";

export default function Nav() {
  return (
    <NavUlBar>
      <nav>
        <ul>
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      </nav>
    </NavUlBar>
  );
}
