import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routeConfig } from "routeConfig";
import { Items, List, StyledLink } from "styles/NavbarStyles";
import { StyledPara } from "styles/Styledpara";

export default function SiderNav() {
  return (
    <List>
      {routeConfig.map((route) => {
        return (
          <StyledLink to={route.path} key={route.path}>
            <Items>
              <FontAwesomeIcon icon={route.icon} />
              <StyledPara fontWeight="bold">{route.label}</StyledPara>
            </Items>
          </StyledLink>
        );
      })}
    </List>
  );
}
