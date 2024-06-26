import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, LogoContainer } from "../components/LayoutStyles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useResponsive from "../hooks/useResponsive";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header({ isOpen, navToggler }) {
  const { isMobile } = useResponsive();
  const theme = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
      <LogoContainer>
        {isMobile && !isOpen && (
          <FontAwesomeIcon
            icon={faBars}
            style={{ cursor: "pointer" }}
            onClick={navToggler}
          />
        )}
        <h1>React Components</h1>
      </LogoContainer>
    </HeaderContainer>
  );
}
