import styled from "styled-components";

export const Box = styled.div<{ pointerEvents?: string }>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  margin: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ pointerEvents }) => pointerEvents};
`;
