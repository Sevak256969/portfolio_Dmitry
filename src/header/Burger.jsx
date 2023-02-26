import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import BurgerList from "./BurgerList";
import { MenuMedia } from "../MainTags";

export default function Burger() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    function changeSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", changeSize);
    return () => window.removeEventListener("resize", changeSize);
  }, []);
  useEffect(() => {
    windowWidth <= 800 ? setShowMenu(true) : setShowMenu(false);
  }, [windowWidth]);
  return (
    <>
      {open && <BurgerList />}
      {showMenu && (
        <MenuMedia onClick={() => setOpen(!open)}>
          <Menu />
        </MenuMedia>
      )}
    </>
  );
}
