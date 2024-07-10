import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, LogoContainer } from "../styles/LayoutStyles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useResponsive from "../hooks/useResponsive";

export default function Header({
  isOpen,
  navToggler,
}: {
  isOpen: boolean;
  navToggler: () => void;
}) {
  const { isMobile } = useResponsive();

  return (
    <HeaderContainer>
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
