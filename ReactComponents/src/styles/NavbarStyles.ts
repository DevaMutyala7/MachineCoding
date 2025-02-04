import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  width: 100%;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Items = styled.li<{ isActive: boolean }>`
  width: 100%;
  color: inherit;

  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  background: ${(props) =>
    props.isActive ? props.theme.colors.primary : "inherit"};

  .active {
    background: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
