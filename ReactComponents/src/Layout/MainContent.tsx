import { RouteConfig } from "types/RouteConfig";
import { MainContainer } from "../styles/LayoutStyles";
import { StyledPara } from "styles/Styledpara";

export default function MainContent({
  route,
  children,
}: {
  route?: RouteConfig;
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <div>
        <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
          {route?.title}
        </h3>
        <StyledPara style={{ textAlign: "left" }}>
          {route?.description}
        </StyledPara>
      </div>
      <div
        style={{
          height: "100%",
          background: "rgb(255,255,255)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </MainContainer>
  );
}
