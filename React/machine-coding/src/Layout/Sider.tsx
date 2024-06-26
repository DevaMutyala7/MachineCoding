import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiderContainer } from "../components/LayoutStyles";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useResponsive from "../hooks/useResponsive";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Sider({ isOpen, navToggler, isMobile }) {
  const theme = useContext(ThemeContext);
  return (
    <SiderContainer className={isOpen ? "visible" : "invisible"} theme={theme}>
      {isMobile && isOpen && (
        <FontAwesomeIcon
          icon={faXmark}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "10px",
            top: "10px",
            margin: "10px",
          }}
          onClick={navToggler}
        />
      )}

      <p>Sider</p>
    </SiderContainer>
  );
}
