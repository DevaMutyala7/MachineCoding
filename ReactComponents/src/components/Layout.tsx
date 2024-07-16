import Header from "../Layout/Header";
import { LayoutContainer } from "../styles/LayoutStyles";
import MainContent from "../Layout/MainContent";
import Sider from "../Layout/Sider";

import React, { useEffect, useState } from "react";
import useResponsive from "../hooks/useResponsive";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isMobile } = useResponsive();
  const [openMobileSider, setOpenMobileSider] = useState(true);

  function handleNavBar() {
    setOpenMobileSider((open) => !open);
  }

  useEffect(() => {
    if (!isMobile) {
      setOpenMobileSider(true);
    }
  }, [isMobile]);

  return (
    <LayoutContainer>
      <Header isOpen={openMobileSider} navToggler={handleNavBar} />

      <Sider
        isOpen={openMobileSider}
        navToggler={handleNavBar}
        isMobile={isMobile}
      />

      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
}
