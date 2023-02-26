import React from "react";
import NavBar from "./NavBar";
import Btn from "../aside/Btn";
import UserName from "../aside/UserName";
import AsideMob from "./../aside/AsideMob";

export default function BurgerList({ open }) {
  return (
    <div open={open}>
      <AsideMob />
      <UserName />
      <NavBar />
      <Btn />
    </div>
  );
}
