import { useState } from "react";
import { NavLi, MenuBtn } from "../MainTags";
import Dropdown from "./Dropdown";
import imgIcon from "./Polygon.png";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <NavLi>
      {items.submenu ? (
        <>
          <MenuBtn
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            <span>
              <img src={imgIcon} alt=""></img>
            </span>
          </MenuBtn>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </NavLi>
  );
};

export default MenuItems;
