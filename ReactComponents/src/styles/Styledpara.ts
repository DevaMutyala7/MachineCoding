import styled from "styled-components";

export const StyledPara = styled.p<{
  fontWeight?: string;
  margin?: string;
  fontSize?: string;
}>`
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  margin: ${({ margin }) => margin || "0px"};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
`;
