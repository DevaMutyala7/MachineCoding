import Header from "../Layout/Header";
import { LayoutContainer } from "./LayoutStyles";
import MainContent from "../Layout/MainContent";
import Sider from "../Layout/Sider";

import { useEffect, useState } from "react";
import useResponsive from "../hooks/useResponsive";

export default function Layout({ children }) {
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
