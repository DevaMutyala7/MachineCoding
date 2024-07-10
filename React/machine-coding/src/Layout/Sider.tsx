import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiderContainer } from "../styles/LayoutStyles";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SiderNav from "./Sidernav";

type SiderProps = {
  isOpen: boolean;
  navToggler: () => void;
  isMobile: boolean;
};

export default function Sider({ isOpen, navToggler, isMobile }: SiderProps) {
  return (
    <SiderContainer className={isOpen ? "visible" : "invisible"}>
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
      <SiderNav />
    </SiderContainer>
  );
}
