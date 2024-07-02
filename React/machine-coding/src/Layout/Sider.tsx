import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiderContainer } from "../styles/LayoutStyles";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type SiderProps = {
  isOpen: boolean;
  navToggler: () => void;
  isMobile: boolean;
};

export default function Sider({ isOpen, navToggler, isMobile }: SiderProps) {
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
    </SiderContainer>
  );
}
