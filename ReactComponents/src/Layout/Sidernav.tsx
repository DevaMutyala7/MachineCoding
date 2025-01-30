import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";
import { routeConfig } from "routeConfig";
import { Items, List, StyledLink } from "styles/NavbarStyles";
import { StyledPara } from "styles/Styledpara";

export default function SiderNav() {
  const location = useLocation();

  return (
    <List>
      {routeConfig.map((route) => {
        const isActive = location.pathname === route.path;
        return (
          <StyledLink to={route.path} key={route.path}>
            <Items isActive={isActive}>
              <FontAwesomeIcon icon={route.icon} />
              <StyledPara fontWeight="bold">{route.label}</StyledPara>
            </Items>
          </StyledLink>
        );
      })}
    </List>
  );
}
