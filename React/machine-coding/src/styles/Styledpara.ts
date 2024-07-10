import styled from "styled-components";

export const StyledPara = styled.p<{ fontWeight?: string; margin?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  margin: ${({ margin }) => margin || "0px"};
`;
