import React from "react";
import menuItems from "./header.json";
import { NavUl } from "../MainTags";
import MenuItems from "./Menuitems";

export default function Nav() {
  return (
    <div>
      <nav>
        <NavUl>
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </NavUl>
      </nav>
    </div>
  );
}
