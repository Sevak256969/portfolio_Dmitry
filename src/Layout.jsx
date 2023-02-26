import React from "react";
import Header from "./header";
import Aside from "./aside";
import { Outlet } from "react-router";
import { LayoutDiv, AsideSection, MaineDiv } from "./MainTags";

export default function Layout() {
  return (
    <>
      <LayoutDiv>
        <AsideSection>
          <Aside />
        </AsideSection>
        <MaineDiv>
          <Header />
          <main>
            <Outlet />
          </main>
        </MaineDiv>
      </LayoutDiv>
    </>
  );
}
